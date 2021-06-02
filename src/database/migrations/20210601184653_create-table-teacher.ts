import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Teacher', table => {
    table.uuid('id').index()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.enu('gender', ['male', 'female']).notNullable()
    table.date('birthDate')
    table.string('state')
    table.string('country')
    table.string('description')
    table.uuid('class_id').index()
    table.foreign('class_id').references('Class.id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Teacher')
}
