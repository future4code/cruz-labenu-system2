import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Class').del()

  // Inserts seed entries
  await knex('Class').insert([
    {
      id: uuid(),
      name: 'Cruz',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 6
    },
    {
      id: uuid(),
      name: 'Epis',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Melo',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 4
    },
    {
      id: uuid(),
      name: 'Melina',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 1
    }
  ])
}
