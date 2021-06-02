import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Hobbies').del()

  // Inserts seed entries
  await knex('Hobbies').insert([
    {
      id: uuid(),
      name: 'Filmes',
    },
    {
      id: uuid(),
      name: 'Andar de bike',
    },
    {
      id: uuid(),
      name: 'Tocar violão',
    },
    {
      id: uuid(),
      name: 'Dançar',
    }
  ])
}
