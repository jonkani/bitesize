'use strict';

const knex = require('../knex');
const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const humps = require('humps');
const { camelizeKeys, decamelizeKeys } = require('humps')
const { checkAuth } = require('./middleware');
const router = express.Router();

// create user
router.post('/users', (req, res, next) => {
  const { email, password } = req.body;

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
      const newUser = { email, hashedPassword };
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
router.patch('/users', checkAuth, (req, res, next) => {
  const { maxPrice, searchRadius, disabled } = req.body;
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
      max_price: maxPrice,
      search_radius: searchRadius
    })
    .then(() => {
      return knex('users_categories')
        .select('category_id')
        .where('user_id', id)
    })
    .then((result) => {
      const parsed = result.map((element) => element['category_id']);
      const disabledParsed = JSON.parse(disabled);
      toSubtract = compare(parsed, disabledParsed);
      toAdd = compare(disabledParsed, parsed);
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
    .select('max_price', 'search_radius', 'category_id')
    .where('users.id', req.token.userId)
    .then((response) => {
      res.send(camelizeKeys(response));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
