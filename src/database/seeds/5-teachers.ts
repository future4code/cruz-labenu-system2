import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'
import {cruzId} from './1-classes'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Teacher').del()

  // Inserts seed entries
  await knex('Teacher').insert([
    {
      id: uuid(),
      name: 'Matheus Gesualdo',
      nickname: 'Matheuszinho',
      email: 'matheus.gesualdo@labenu.com',
      password: '123123123',
      gender: 'male',
      birthDate: '1990-05-22',
      picture: '',
      side: 'back-end',
      state: 'São Paulo',
      country: 'Brazil',
      description: '',
      class_id: cruzId
    },
    {
      id: uuid(),
      name: 'Amanda',
      nickname: 'Amandinha',
      email: 'amandinha@labenu.com',
      password: '123123123',
      gender: 'female',
      birthDate: '1988-05-12',
      picture: '',
      side: 'full-stack',
      state: 'Minas Gerais',
      country: 'Brazil',
      description: '',
      class_id: cruzId
    },
    {
      id: uuid(),
      name: 'Leticia Chijo',
      nickname: 'Chijo',
      email: 'leticia.chijo@labenu.com',
      password: '123123123',
      gender: 'female',
      birthDate: '1993-03-02',
      picture: '',
      side: 'front-end',
      state: 'São Paulo',
      country: 'Brazil',
      description: '',
      class_id: cruzId
    }
  ])
}
