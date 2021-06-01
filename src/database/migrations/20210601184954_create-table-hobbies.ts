import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Hobbies', table => {
    table.uuid('id').index()
    table.string('name').notNullable().unique()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Hobbies')
}
