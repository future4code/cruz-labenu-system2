import {JSONSchemaType} from 'ajv'
import {ClassSearchOptions} from '../../shared/types/ClassSearchOptions'
import {queryOptions} from './query-options'
import {classAnyProps} from './class-any-props'

const {name, patron, module: modulo} = classAnyProps.properties

export const classSearchOptions: JSONSchemaType<ClassSearchOptions> = {
  ...queryOptions,
  type: 'object',
  examples: [
    {
      ...queryOptions.examples[0],
      name: 'https://example.com/search?name=cru',
      patron: 'https://example.com/search?patron=oswaldo',
      module: 'https://example.com/search?module=5'
    }
  ],
  properties: {
    ...queryOptions.properties,
    name,
    patron,
    module: modulo
  }
}
