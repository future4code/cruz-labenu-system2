import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Student', table => {
    table.uuid('id').index()
    table.string('name').notNullable()
    table.string('nickname')
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.enu('gender', ['male', 'female']).notNullable()
    table.date('birthDate').notNullable()
    table.string('picture')
    table.string('state')
    table.string('country')
    table.text('description')
    table.uuid('class_id').index()
    table.foreign('class_id').references('Class.id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Student')
}
