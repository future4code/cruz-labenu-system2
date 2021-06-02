import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Skills').del()

  // Inserts seed entries
  await knex('Skills').insert([
    {
      id: uuid(),
      name: 'REACT',
    },
    {
      id: uuid(),
      name: 'CSS',
    },
    {
      id: uuid(),
      name: 'JS',
    },
    {
      id: uuid(),
      name: 'NODE',
    },
    {
      id: uuid(),
      name: 'SQL',
    },
    {
      id: uuid(),
      name: 'TYPESCRIPT',
    },
    {
      id: uuid(),
      name: 'EXPRESS',
    },
    {
      id: uuid(),
      name: 'HTML',
    }
  ])
}
