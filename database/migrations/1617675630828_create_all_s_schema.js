'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateAllSSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('avatar').defaultTo('default.png')
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
    })

    this.create('userfavorites', (table) => {
      table.increments()
      table.integer('id_user').notNullable()
      table.integer('id_barber').notNullable()
    })

    this.create('userappointments', (table) => {
      table.increments()
      table.integer('id_user').notNullable()
      table.integer('id_barber').notNullable()
      table.datetime('ap_datetime', { precision: 6 })
    })

    this.create('barbers', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('avatar').defaultTo('default.png')
      table.float('stars').defaultTo(0)
      table.string('latitude')
      table.string('longitude')
    })

    this.create('barbersphotos', (table) => {
      table.increments()
      table.integer('id_barber').notNullable()
      table.string('url')
    })

    this.create('barberreviews', (table) => {
      table.increments()
      table.integer('id_barber').notNullable()
      table.float('rate')
    })

    this.create('barberservices', (table) => {
      table.increments()
      table.integer('id_barber').notNullable()
      table.string('name')
      table.float('price')
    })

    this.create('barbertestimonials', (table) => {
      table.increments()
      table.integer('id_barber').notNullable()
      table.string('name')
      table.float('rate')
      table.string('body')
    })

    this.create('barberavailability', (table) => {
      table.increments()
      table.integer('id_barber').notNullable()
      table.integer('weekday')
      table.string('hours')
    })
  }

  down () {
    this.drop('users')
    this.drop('userfavorites')
    this.drop('userappointments')
    this.drop('barbers')
    this.drop('barbersphotos')
    this.drop('barberreviews')
    this.drop('barberservices')
    this.drop('barbertestimonials')
    this.drop('barberavailability')
  }
}

module.exports = CreateAllSSchema
