import {JSONSchemaType} from 'ajv'
import {ClassSearchOptions} from '../../shared/types/ClassSearchOptions'
import {queryOptions} from './query-options'
import {userAnyProps} from './user-any-props'

const {name, nickname, email} = userAnyProps.properties

export const userSearchOptions: JSONSchemaType<ClassSearchOptions> = {
  ...queryOptions,
  type: 'object',
  examples: [
    {
      ...queryOptions.examples[0],
      name: 'https://example.com/search?name=marcelino',
      nickname: 'https://example.com/search?nickname=bananinha',
      email: 'https://example.com/search?email=gmail'
    }
  ],
  properties: {
    ...queryOptions.properties,
    name,
    nickname,
    email
  }
}
