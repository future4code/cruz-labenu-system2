import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Teacher').del()

  // Inserts seed entries
  await knex('Teacher').insert([
    {
      id: uuid(),
      name: 'Marcelino Sandroni',
      email: 'marcelino.sandroni@gmail.com',
      birthDate: '1991-11-28'
    },
    {
      id: uuid(),
      name: 'Isabelle Frederico',
      email: 'isabelle.frederico@gmail.com',
      birthDate: '1991-11-28'
    }
  ])
}
