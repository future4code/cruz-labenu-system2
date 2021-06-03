import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Modules', table => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.string('descriptions')
    table.integer('weeks').notNullable().defaultTo(4)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Modules')
}
