import {BaseModel} from './base'
import {QueryOptions} from '../shared/types/QueryOptions'
import {Route} from '../@types/decorators'

export class StudentModel extends BaseModel {
  constructor() {
    super('Student')
  }

  getHobbies = async (queries?: QueryOptions) => {
    let allStudents = this.storage
      .select('Hobbie.*')
      .join('Student', 'Hobbie.id', 'Student.id')
    if (!queries) {
      return await allStudents
    }
    const filtered = this.pagination(queries, allStudents)
    return await filtered
  }

  addHobbie = async (queries?: QueryOptions) => {
    let allStudents = this.storage
      .select('Hobbie.*')
      .join('Student', 'Hobbie.id', 'Student.id')
    if (!queries) {
      return await allStudents
    }
    const filtered = this.pagination(queries, allStudents)
    return await filtered
  }

  @Route('delete', ':id/hobbies')
  deleteHobbie = async (queries?: QueryOptions) => {
    let allStudents = this.storage
      .select('Hobbie.*')
      .join('Student', 'Hobbie.id', 'Student.id')
    if (!queries) {
      return await allStudents
    }
    const filtered = this.pagination(queries, allStudents)
    return await filtered
  }
}
