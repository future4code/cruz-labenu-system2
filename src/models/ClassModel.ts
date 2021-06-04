import {BaseModel} from './BaseModel'
import {Class} from '../shared/entities/Class'

export class ClassModel extends BaseModel<Class> {
  constructor() {
    super('Class')
  }
  
  //methods with JOIN in other tables/models
}
