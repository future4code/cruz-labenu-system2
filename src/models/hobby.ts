import {BaseModel} from './base'
import {QueryOptions} from '../shared/types/QueryOptions'

export class HobbyModel extends BaseModel {
  constructor() {
    super('Hobbies')
  }

  getStudents = async (id: string, queries?: QueryOptions) => {
    let allStudents = this.storage
      .select('Student.id', 'Student.name')
      .join('StudentHobbies', 'StudentHobbies.student_id', 'Student.id')
      .where('StudentHobbie.hobbie_id', id)

    if (!queries) {
      return await allStudents
    }
    const filtered = this.pagination(queries, allStudents)
    return await filtered
  }
}
