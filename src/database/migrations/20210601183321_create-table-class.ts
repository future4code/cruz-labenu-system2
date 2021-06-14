import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Class', table => {
    table.uuid('id').primary()
    table.string('name').unique().notNullable()
    table.string('patron').unique()
    table.string('patronPicture')
    table.text('biography')
    table.enu('period', ['day', 'night']).notNullable().defaultTo('day')
    table.date('startDate')
    table.date('endDate')
    table.integer('module')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Class')
}
