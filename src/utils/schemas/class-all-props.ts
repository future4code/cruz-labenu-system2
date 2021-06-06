import {JSONSchemaType} from 'ajv'
import {Class} from '../../shared/entities/Class'

export const classAllProps: JSONSchemaType<Omit<Class, 'id'>> = {
  title: 'Please inform all required fields in valid format',
  examples: [
    {
      name: 'Cruz',
      patron: 'Oswaldo Cruz',
      patronPicture:
        'https://images01.brasildefato.com.br/d3fc6896f47f52af5c9d3a760253d807.jpeg',
      biography: `Oswaldo Gonçalves Cruz, better known as Oswaldo Cruz, was a Brazilian physician, pioneer bacteriologist, epidemiologist and public health officer and the founder of the Oswaldo Cruz Institute. He occupied the fifth chair of the Brazilian Academy of Letters from 1912 until his death in 1917.`,
      startDate: '2021-01-25',
      endDate: '2021-07-31',
      module: 6
    }
  ],
  type: 'object',
  properties: {
    name: {type: 'string', minLength: 3, maxLength: 10},
    patron: {type: 'string', minLength: 6, maxLength: 16},
    patronPicture: {type: 'string', format: 'url', minLength: 10},
    biography: {type: 'string', minLength: 50, maxLength: 255},
    startDate: {
      type: 'string',
      format: 'date',
      formatMinimum: '2018-01-01',
      formatMaximum: '2021-12-31'
    },
    endDate: {
      type: 'string',
      format: 'date',
      formatMinimum: '2018-01-01',
      formatMaximum: '2021-12-31'
    },
    module: {type: 'integer', minimum: 0, maximum: 7}
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
