import {JSONSchemaType} from 'ajv'
import {User} from '../../shared/entities/User'

export const userAnyProps: JSONSchemaType<
  Partial<Omit<User, 'id' | 'class_id'>>
> = {
  title: 'Please valid fields to update',
  examples: [
    {
      email: 'newemail.address@gmail.com',
      picture: 'new picture url',
      class_id: 'new-class-id'
    }
  ],
  type: 'object',
  minProperties: 1,
  properties: {
    name: {type: 'string', minLength: 3, maxLength: 50, nullable: true},
    nickname: {type: 'string', minLength: 2, maxLength: 16, nullable: true},
    email: {
      type: 'string',
      format: 'email',
      minLength: 10,
      maxLength: 255,
      nullable: true
    },
    password: {type: 'string', minLength: 8, maxLength: 1024, nullable: true},
    gender: {type: 'string', enum: ['male', 'female'], nullable: true},
    birthDate: {
      type: 'string',
      format: 'date',
      formatMinimum: '1940-01-01',
      formatMaximum: '2002-01-01',
      nullable: true
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
      enum: ['front-end', 'back-end', 'full-stack'],
      nullable: true
    },
    state: {type: 'string', minLength: 3, maxLength: 20, nullable: true},
    country: {type: 'string', minLength: 3, maxLength: 20, nullable: true},
    description: {type: 'string', minLength: 10, maxLength: 500, nullable: true}
  },
  additionalProperties: false,
  required: []
}
