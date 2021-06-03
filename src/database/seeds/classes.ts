import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Class').del()

  // Inserts seed entries
  await knex('Class').insert([
    {
      id: uuid(),
      name: 'Newton',
      patron: 'Isaac Newton',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Bouman',
      patron: 'Katherine Bouman',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Sagan',
      patron: 'Carl Sagan',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Hamilton',
      patron: 'Margareth Hamilton',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Lavon',
      patron: 'Percy Lavon Julian',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Mello',
      patron: 'Duília de Mello',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Turing',
      patron: 'Alan Turing',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Jackson',
      patron: 'Mary Jackson',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Tang',
      patron: 'Audrev Tang',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Dumont',
      patron: 'Santos Dumont',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Muyemb',
      patron: 'Jean-Jacques Muyembe',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Epps',
      patron: 'Jeanette Epps',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 7
    },
    {
      id: uuid(),
      name: 'Cruz',
      patron: 'Oswaldo Cruz',
      patronPicture:
        'https://images01.brasildefato.com.br/d3fc6896f47f52af5c9d3a760253d807.jpeg',
      biography: `Oswaldo Gonçalves Cruz, better known as Oswaldo Cruz, was a Brazilian physician, pioneer bacteriologist, epidemiologist and public health officer and the founder of the Oswaldo Cruz Institute. He occupied the fifth chair of the Brazilian Academy of Letters from 1912 until his death in 1917.`,
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 6
    },
    {
      id: uuid(),
      name: 'Muñoz',
      patron: 'Nubia Muñoz Calero',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 4
    },
    {
      id: uuid(),
      name: 'Paiva',
      patron: 'Valéria de Paiva',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 1
    },
    {
      id: uuid(),
      name: 'Molina',
      patron: 'Mário Molina',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 1
    },
    {
      id: uuid(),
      name: 'Johnson',
      patron: 'Katherine Johnson',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 1
    },
    {
      id: uuid(),
      name: 'Lovelace',
      patron: 'Ada Lovelace',
      biography: '',
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 1
    }
  ])
}
