import {JSONSchemaType} from 'ajv'
import {User} from '../../shared/entities/User'

export const userAllProps: JSONSchemaType<Omit<User, 'id' | 'class_id'>> = {
  title: 'Please inform all required fields in valid format',
  examples: [
    {
      name: 'Marcelino',
      nickname: 'marcelinosandroni',
      email: 'marcelino.sandroni@gmail.com',
      password: '123456',
      gender: 'male',
      birthDate: '1991-11-28',
      side: 'full-stack',
      picture: 'urlsldfjlsdflk',
      state: 'São Paulo',
      country: 'Brazil',
      description: `Apaixonado e guiado pelo conhecimento, curioso e dedicado, a 15 anos na área contábil, decidi migrar de carreira para desenvolvimento de software. Neste novo caminho, me adaptei facilmente aos novos conhecimentos, por já estar habituado ao aprendizado rápido e resolução de problemas.  Questionador e aberto a qualquer tipo de conversa, sempre disponível a ajudar e aprender.`,
      class_id: 'ee244fe7-ad1b-416d-aaf5-927ff2387233'
    }
  ],
  type: 'object',
  properties: {
    name: {type: 'string', minLength: 3, maxLength: 50},
    nickname: {type: 'string', minLength: 2, maxLength: 16, nullable: true},
    email: {type: 'string', format: 'email', minLength: 10, maxLength: 255},
    password: {type: 'string', minLength: 8, maxLength: 1024},
    gender: {type: 'string', enum: ['male', 'female']},
    birthDate: {
      type: 'string',
      format: 'date',
      formatMinimum: '1940-01-01',
      formatMaximum: '2002-01-01'
    },
    picture: {
      type: 'string',
      format: 'url',
      minLength: 6,
      maxLength: 255,
      nullable: true
    },
    side: {
      type: 'string',
      enum: ['front-end', 'back-end', 'full-stack']
    },
    state: {type: 'string', minLength: 3, maxLength: 20, nullable: true},
    country: {type: 'string', minLength: 3, maxLength: 20, nullable: true},
    description: {type: 'string', minLength: 10, maxLength: 500, nullable: true}
  },
  required: ['name', 'email', 'password', 'gender', 'birthDate']
}
