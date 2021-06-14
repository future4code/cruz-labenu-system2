import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('StudentHobbies', table => {
    table.uuid('student_id').index()
    table.foreign('student_id').references('Student.id').onDelete('CASCADE')
    table.uuid('hobbies_id').index()
    table.foreign('hobbies_id').references('Hobbies.id').onDelete('CASCADE')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('StudentHobbies')
}
