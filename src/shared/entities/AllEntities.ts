import {Class, User, Activity, ActivityRecord} from '.'

export type AllEntities = Class | User | Activity | ActivityRecord | BaseEntitie

export interface BaseEntitie {
  id: string
  name: string
}
