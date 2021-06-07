import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'
import {cruzId} from './classes'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Student').del()

  // Inserts seed entries
  await knex('Student').insert([
    {
      id: cruzId,
      name: 'Marcelino Sandroni',
      email: 'marcelino.sandroni@gmail.com',
      birthDate: '1991-11-28'
    },
    {
      id: cruzId,
      name: 'Isabelle Frederico',
      email: 'isabelle.frederico@gmail.com',
      birthDate: '1991-11-28'
    }
  ])
}
