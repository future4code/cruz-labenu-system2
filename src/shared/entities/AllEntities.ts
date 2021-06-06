import {Class} from './Class'
import {Hobbie} from './Hobbie'
import {Skill} from './Skill'
import {Teacher} from './Teacher'

export type AllEntities = Class | Teacher | Hobbie | Skill | BaseEntitie

export interface BaseEntitie {
  id: string
  name: string
}
