import {Knex} from 'knex'
import {connection} from '../index'

export async function up(knex: Knex): Promise<void> {
  return connection.schema.createTable('Student', table => {
    table.uuid('id')
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.date('birthDate').notNullable()
    table.uuid('class_id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return connection.schema.dropTable('Student')
}
