import {BaseModel} from './base'
import {Class} from '../shared/entities/Class'
import {QueryOptions} from '../shared/types/QueryOptions'
import {Route} from '../@types/decorators'

export class ClassModel extends BaseModel {
  constructor() {
    super('Class')
  }

  getStudents = async (queries?: QueryOptions) => {
    let allStudents = this.storage
      .select('Student.*')
      .join('Student', 'Class.id', 'Student.id')
    if (!queries) {
      return await allStudents
    }
    const filtered = this.pagination(queries, allStudents)
    return await filtered
  }

  getTeachers = async (queries: QueryOptions) => {
    let allTeachers = this.storage
      .select('Teacher.*')
      .join('Teacher', 'Class.id', 'Teacher.id')
    if (!queries) {
      return await allTeachers
    }
    const filtered = this.pagination(queries, allTeachers)
    return await filtered
  }
}
