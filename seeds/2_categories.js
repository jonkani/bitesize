'use strict';

exports.seed = function(knex) {
  return knex('categories').del()
    .then(() => {
      return knex('categories').insert([{
        id: 1,
        name: 'African'
      },
      {
        id: 2,
        name: 'Asian Fusion'
      },
      {
        id: 3,
        name: 'Barbeque'
      },
      {
        id: 4,
        name: 'Burgers'
      },
      {
        id: 5,
        name: 'Cajun/Creole'
      },
      {
        id: 6,
        name: 'Caribbean'
      },
      {
        id: 7,
        name: 'Chinese'
      },
      {
        id: 8,
        name: 'Delis'
      },
      {
        id: 9,
        name: 'Diners'
      },
      {
        id: 10,
        name: 'Fast Food'
      },
      {
        id: 11,
        name: 'Italian'
      },
      {
        id: 12,
        name: 'Japanese'
      },
      {
        id: 13,
        name: 'Korean'
      },
      {
        id: 14,
        name: 'Latin American'
      },
      {
        id: 15,
        name: 'Mediterranean'
      },
      {
        id: 16,
        name: 'Mexican'
      },
      {
        id: 17,
        name: 'Middle Eastern'
      },
      {
        id: 18,
        name: 'Pizza'
      },
      {
        id: 19,
        name: 'African'
      },
      {
        id: 20,
        name: 'Sandwiches'
      },
      {
        id: 21,
        name: 'Seafood'
      },
      {
        id: 22,
        name: 'Southern'
      },
      {
        id: 23,
        name: 'Spanish'
      },
      {
        id: 24,
        name: 'Thai'
      },
      {
        id: 25,
        name: 'Vietnamese'
      },
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));"
      );
    });
};
