import {JSONSchemaType} from 'ajv'
import {Class} from '../../shared/entities/Class'

export const classAllPropsWithoutId: JSONSchemaType<Omit<Class, 'id'>> = {
  title: 'title test',
  examples: [
    {
      name: 'something something'
    }
  ],
  type: 'object',
  properties: {
    name: {type: 'string'},
    patron: {type: 'string'},
    patronPicture: {type: 'string', format: 'url'},
    biography: {type: 'string'},
    startDate: {type: 'string', format: 'date'},
    endDate: {type: 'string', format: 'date'},
    module: {type: 'integer'}
  },
  required: [
    'name',
    'patron',
    'patronPicture',
    'biography',
    'startDate',
    'module'
  ]
}
