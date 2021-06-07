import {BaseModel} from './base'
import {Class} from '../shared/entities/Class'
import {QueryOptions} from '../shared/types/QueryOptions'

export class ClassModel extends BaseModel {
  constructor() {
    super('Class')
  }

  //methods with JOIN in other tables/models
  getStudents = async (queries?: QueryOptions) => {
    let allStudents = this.storage
      .select('Student.*')
      .join('Student', 'Class.id', 'Student.id')
    if (!queries) {
      return allStudents
    }
    for (const query in queries) {
      allStudents = allStudents[query](queries[query])
    }
  }

  getTeachers = () =>
    this.storage.select('Teacher.*').join('Teacher', 'Class.id', 'Teacher.id')
}
