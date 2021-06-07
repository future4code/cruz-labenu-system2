import {Class, User, Activity} from '.'

export type AllEntities = Class | User | Activity | BaseEntitie

export interface BaseEntitie {
  id: string
  name: string
}
