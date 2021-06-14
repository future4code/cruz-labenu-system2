import {QueryOptions} from './QueryOptions'

export interface UserSearchOptions extends QueryOptions {
  name?: string
  nickname?: string
  email?: number
}
