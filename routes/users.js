'use strict';

const knex = require('../knex');
const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const humps = require('humps');
const ev = require('express-validation');
const validations = require('../validations/users');
const { camelizeKeys, decamelizeKeys } = require('humps');
const { checkAuth } = require('./middleware');
const router = express.Router();

// create user
router.post('/users', ev(validations.post), (req, res, next) => {
  const { email, password, minRating, searchRadius } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(400, 'Email already exists.');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const newUser = { email, hashedPassword, minRating, searchRadius };
      const row = decamelizeKeys(newUser);

      return knex('users')
        .insert(row, '*');
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

// update user preferences
router.patch('/users', checkAuth, ev(validations.patch), (req, res, next) => {
  const { minRating, searchRadius, disabled } = req.body;
  const id = req.token.userId;
  const compare = function(target, filterer) {
    return target.filter((item) => {
      for (const element of filterer) {
        if (item === element) {
          return false;
        }
      }
      return true;
    });
  };
  let toSubtract;
  let toAdd;

  knex('users')
    .where('id', id)
    .update({
      min_rating: minRating,
      search_radius: searchRadius
    })
    .then(() => {
      return knex('users_categories')
        .select('category_id')
        .where('user_id', id)
    })
    .then((result) => {
      const parsed = result.map((element) => element['category_id']);
      toSubtract = compare(parsed, disabled);
      toAdd = compare(disabled, parsed);
      const promisePile = [];

      for (const item of toSubtract) {
        promisePile.push(
          knex('users_categories')
            .where({
              user_id: id,
              category_id: item
            })
            .del()
        )
      };
      for (const item of toAdd) {
        promisePile.push(
          knex('users_categories')
            .insert({
              user_id: id,
              category_id: item
            })
        )
      };

      return Promise.all(promisePile);
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err)
    });
});

// get user preferences
router.get('/users', checkAuth, (req, res, next) => {
  knex('users')
    .leftJoin('users_categories', 'users.id', 'user_id')
    .select('min_rating', 'search_radius', 'category_id')
    .where('users.id', req.token.userId)
    .then((response) => {
      res.send(camelizeKeys(response));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
