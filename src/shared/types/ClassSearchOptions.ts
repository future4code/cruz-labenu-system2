import {QueryOptions} from './QueryOptions'

export interface ClassSearchOptions extends QueryOptions {
  name?: string
  patron?: string
  module?: number
}
