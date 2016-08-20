'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').unique().notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.integer('search_radius').notNullable().defaultTo(1);
    table.integer('max_price').notNullable().defaultTo(4);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
