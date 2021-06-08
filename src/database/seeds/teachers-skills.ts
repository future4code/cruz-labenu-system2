import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'
import {bikeId, danceId} from './hobbies'
import {isabelleId, marcelinoId} from './students'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('StudentHobbies').del()

  // Inserts seed entries
  await knex('StudentHobbies').insert([
    {
      id: uuid(),
      student_id: marcelinoId,
      hobbies_id: bikeId
    },
    {
      id: uuid(),
      student_id: isabelleId,
      hobbies_id: danceId
    }
  ])
}
