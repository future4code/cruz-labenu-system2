import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Teacher', table => {
    table.uuid('id').index()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.date('birthDate')
    table.uuid('class_id').index()
    table.foreign('class_id').references('Class.id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Teacher')
}
