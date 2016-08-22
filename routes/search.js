'use strict'

const knex = require('../knex');
const express = require('express');
const boom = require('boom');
const humps = require('humps');
const { camelizeKeys, decamelizeKeys } = require('humps')
const OAuth = require('oauth');
const jwt = require('jsonwebtoken');
const { checkAuth } = require('./middleware');
const router = express.Router();

router.get('/search', (req, res, next) => {
  const { location, term, displayNumber } = req.body;
  let query = `https://api.yelp.com/v2/search/?location=${location.trim()}&actionlinks=true&sort=2&limit=20`
  let id = null;
  let minRating;
  let searchRadius;
  let restaurants;

  if (term) {
    query += `&term=${term.trim()}`;
  }

  if (req.cookies.accessToken) {
    id = jwt.decode(req.cookies.accessToken).userId;
  }

  knex('users')
    .where('id', id)
    .first()
    .then((response) => {
      if (response) {
        minRating = response.min_rating;
        searchRadius = response.search_radius * 1600;
      }
      else {
        minRating = 1;
        searchRadius = 3200;
      }

      query += `&radius_filter=${searchRadius}`
    })
    .then(() => {
      const oauth = new OAuth.OAuth(
        null,
        null,
        process.env.CONSUMER_KEY,
        process.env.CONSUMER_SECRET,
        '1.0',
        null,
        'HMAC-SHA1'
      );
      const yelp = new Promise((resolve, reject) => {
        oauth.get(
          query,
          process.env.USER_TOKEN,
          process.env.USER_SECRET,
          (error, data, response) => {
            if (error) {
              console.error(error, data);
              reject(error);
            }
            resolve(data);
          });
        })
        return yelp;
    })
    .then((data) => {
      const parsedData = JSON.parse(data)
      restaurants = parsedData.businesses.map((element) => {
        const {
          rating,
          name,
          url,
          categories,
          display_phone,
          snippet_text,
          review_count
        } = element;

        const categoryList = categories.map((item) => {
          return item[0];
        });

        const restaurant = {
          rating,
          name,
          url,
          categoryList,
          display_phone,
          snippet_text,
          review_count
        };

        restaurant.location = element.location.display_address;

        return camelizeKeys(restaurant);
      });
      if (!id) {
        return;
      }
      else {
        return knex('users_categories')
          .join('categories', 'categories.id', 'category_id')
          .select('name')
          .where('user_id', id)
          .then((disabled) => {
            const disabledCats = disabled.map((cat) => {

              return cat.name;
            });

            restaurants = restaurants.filter((target) => {
              for (const category of target.categoryList) {
                for (const dCat of disabledCats) {
                  if (category === dCat) {

                    return false;
                  }
                }
              }
              if (minRating > target.rating) {

                return false;
              }

              return true;
            })

            return;
          })
      }
    })
    .then(() => {
      const final = { restaurants, displayNumber }
      res.send(final);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
