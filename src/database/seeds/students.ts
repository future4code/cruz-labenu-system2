import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'
import {cruzId} from './classes'

export const marcelinoId = '42d3ed56-f940-4461-a495-b798332c8046'
export const isabelleId = '7c79133c-1974-4d53-b8b4-b999debded5f'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Student').del()

  // Inserts seed entries
  await knex('Student').insert([
    {
      id: marcelinoId,
      name: 'Marcelino Sandroni',
      nickname: 'marcelino.sandroni',
      email: 'marcelino.sandroni@gmail.com',
      password: '123123123',
      gender: 'male',
      birthDate: '1991-11-28',
      picture: '',
      state: 'São Paulo',
      country: 'Brazil',
      description: '',
      class_id: cruzId
    },
    {
      id: isabelleId,
      name: 'Isabelle Frederico',
      nickname: 'Isa',
      email: 'isabelle.frederico@gmail.com',
      password: '123123123',
      gender: 'female',
      birthDate: '1991-11-28',
      picture: '',
      state: 'São Paulo',
      country: 'Brazil',
      description: '',
      class_id: cruzId
    }
  ])
}
