import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Class', table => {
    table.uuid('id').index()
    table.string('name').unique()
    table.date('startDate')
    table.date('endDate')
    table.string('module')
    table.timestamps(false, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Class')
}
