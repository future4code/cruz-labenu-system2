import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Skills', table => {
    table.uuid('id').index()
    table.string('name').notNullable().unique()
    table.string('description').notNullable()
    table.string('picture').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Skills')
}
