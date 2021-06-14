import {Knex} from 'knex'
import {v4 as uuid} from 'uuid'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Skills').del()

  // Inserts seed entries
  await knex('Skills').insert([
    {
      id: uuid(),
      name: 'React',
      description: 'Framework reativo front-end',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'Vue',
      description: 'Framework reativo front-end',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'HTML',
      description: 'The structure of internet',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'CSS',
      description: 'Styles everywhere',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'Javascript',
      description: 'The modern language',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'Node',
      description: 'Javascript consequering everything',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'SQL',
      description: 'Read tables like a expert',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'TypeScript',
      description: 'Javascript young brother, more beaty and stronger',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    },
    {
      id: uuid(),
      name: 'Express',
      description: 'The main framework for APIs',
      picture: 'https://ionicframework.com/docs/assets/img/frameworks/react.svg'
    }
  ])
}
