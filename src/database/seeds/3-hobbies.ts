import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'

export const bikeId = 'e639aa1e-59db-4cf4-96f5-0ca15488eb3a'
export const danceId = 'e893b71d-f710-4053-8fa7-88e3b01d9273'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Hobbies').del()

  // Inserts seed entries
  await knex('Hobbies').insert([
    {
      id: uuid(),
      name: 'Filmes',
      description: 'Como eh bom assistir a um filminho com pipoca.',
      picture: 'https://image.flaticon.com/icons/png/512/2991/2991606.png'
    },
    {
      id: bikeId,
      name: 'Andar de bike',
      description:
        'Pedalar por ai sem preocupacao e ainda fazendo um super exercicio no longao',
      picture: 'https://image.flaticon.com/icons/png/512/2991/2991606.png'
    },
    {
      id: uuid(),
      name: 'Tocar violão',
      description:
        'Aqueles acordes maneiros mesmo pra quem esta comecando, eh de mais!',
      picture: 'https://image.flaticon.com/icons/png/512/2991/2991606.png'
    },
    {
      id: danceId,
      name: 'Dançar',
      description: 'Balancar o esqueleto e se remexer muito.',
      picture: 'https://image.flaticon.com/icons/png/512/2991/2991606.png'
    }
  ])
}
