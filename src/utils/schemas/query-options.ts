import {JSONSchemaType} from 'ajv'
import {QueryOptions} from '../../shared/types/QueryOptions'

export const queryOptions: JSONSchemaType<QueryOptions> = {
  type: 'object',
  title: 'Please inform only valid options',
  examples: [
    {
      limit: 'https://example.com/search?limit=10',
      offset: 'https://example.com/search?limit=20&offset=10',
      orderBy: 'https://example.com/search?orderby=name',
      order: 'https://example.com/search?order=desc'
    }
  ],
  properties: {
    limit: {type: 'number', minimum: 0, maximum: 100, nullable: true},
    offset: {type: 'number', minimum: 0, maximum: 100, nullable: true},
    orderBy: {type: 'string', nullable: true},
    order: {type: 'string', enum: ['asc', 'desc'], nullable: true}
  },
  additionalProperties: false
}
