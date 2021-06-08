import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'
import {bikeId, danceId} from './3-hobbies'
import {isabelleId, marcelinoId} from './2-students'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('TeacherSkills').del()

  // Inserts seed entries
  await knex('TeacherSkills').insert([
    // {
    //   teacher_id: uuid(),
    //   hobbies_id: uuid()
    // }
  ])
}
