import {JSONSchemaType} from 'ajv'
import {Class} from '../../shared/entities/Class'

export const classAnyProps: JSONSchemaType<Partial<Class>> = {
  title: 'Please inform the fields to update in valid format',
  examples: [
    {
      name: 'Cruz',
      startDate: '2021-01-25'
    }
  ],
  type: 'object',
  properties: {
    id: {type: 'string', format: 'uuid', nullable: true},
    name: {type: 'string', minLength: 3, maxLength: 10, nullable: true},
    patron: {type: 'string', minLength: 6, maxLength: 16, nullable: true},
    patronPicture: {
      type: 'string',
      format: 'url',
      minLength: 10,
      nullable: true
    },
    biography: {type: 'string', minLength: 50, maxLength: 500, nullable: true},
    startDate: {
      type: 'string',
      format: 'date',
      formatMinimum: '2018-01-01',
      formatMaximum: '2021-12-31',
      nullable: true
    },
    endDate: {
      type: 'string',
      format: 'date',
      formatMinimum: '2018-01-01',
      formatMaximum: '2021-12-31',
      nullable: true
    },
    module: {type: 'integer', minimum: 0, maximum: 7, nullable: true}
  }
}
