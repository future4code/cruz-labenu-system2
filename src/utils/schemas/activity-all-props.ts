import {JSONSchemaType} from 'ajv'
import {Activity} from '../../shared/entities'

export const activityAllProps: JSONSchemaType<Omit<Activity, 'id'>> = {
  title: 'Please inform all required fields in valid format',
  examples: [
    {
      name: 'Assistir filmes',
      picture: 'url of the activity',
      description: `Ah como eh bom ver um filminho no sofa se divertindo bem de boas!`
    }
  ],
  type: 'object',
  properties: {
    name: {type: 'string', minLength: 3, maxLength: 50},
    picture: {
      type: 'string',
      format: 'url',
      minLength: 6,
      maxLength: 255
    },
    description: {type: 'string', minLength: 10, maxLength: 500}
  },
  required: ['name', 'picture', 'description']
}
