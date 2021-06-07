import {JSONSchemaType} from 'ajv'
import {queryOptions} from './query-options'
import {ActivitySearchOptions} from '../../shared/types/ActivitySearchOptions'
import {activityAnyProps} from './activity-any-props'

const {name, description} = activityAnyProps.properties

export const classSearchOptions: JSONSchemaType<ActivitySearchOptions> = {
  ...queryOptions,
  type: 'object',
  examples: [
    {
      ...queryOptions.examples[0],
      name: 'https://example.com/search?name=assistir',
      description: 'https://example.com/search?patron=ficar%20de%20boa'
    }
  ],
  properties: {
    ...queryOptions.properties,
    name,
    description
  }
}
