import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('TeacherSkills', table => {
    table.uuid('teacher_id').index()
    table.foreign('teacher_id').references('Teacher.id').onDelete('CASCADE')
    table.uuid('skills_id').index()
    table.foreign('skills_id').references('Skills.id').onDelete('CASCADE')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('TeacherSkills')
}
