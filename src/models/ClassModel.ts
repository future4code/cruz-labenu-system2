import {BaseModel} from './BaseModel'
import {Class} from '../shared/entities/Class'

export class ClassModel extends BaseModel {
  constructor() {
    super('Class')
  }

  //methods with JOIN in other tables/models
  getStudents = () =>
    this.storage.select('Student.*').join('Student', 'Class.id', 'Student.id')

  getTeachers = () =>
    this.storage.select('Teacher.*').join('Teacher', 'Class.id', 'Teacher.id')
}
