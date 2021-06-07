import {JSONSchemaType} from 'ajv'
import {Activity} from '../../shared/entities'

export const activityAnyProps: JSONSchemaType<Omit<Activity, 'id'>> = {
  title: 'Please inform all required fields in valid format',
  examples: [
    {
      description: `I'm changind the description only of the activity xd.`
    }
  ],
  type: 'object',
  minProperties: 1,
  properties: {
    name: {type: 'string', minLength: 3, maxLength: 50, nullable: true},
    picture: {
      type: 'string',
      format: 'url',
      minLength: 6,
      maxLength: 255,
      nullable: true
    },
    description: {type: 'string', minLength: 10, maxLength: 500, nullable: true}
  },
  required: []
}
