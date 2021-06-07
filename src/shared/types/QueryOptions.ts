export interface QueryOptions<T = string> {
  limit?: number
  offset?: number
  order?: Order
  orderBy?: T
}

export type Order = 'asc' | 'desc'
