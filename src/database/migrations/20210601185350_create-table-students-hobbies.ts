import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('StudentHobbies', table => {
    table.uuid('student_id').index()
    table.foreign('student_id').references('Student.id')
    table.uuid('hobbies_id').index()
    table.foreign('hobbies_id').references('Hobbies.id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('StudentHobbies')
}
