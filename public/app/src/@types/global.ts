export interface ApiSearch {
  id: string
  name: string
  limit: number
  offset: number
  orderBy: string
  order: 'ASC' | 'DESC'
}
