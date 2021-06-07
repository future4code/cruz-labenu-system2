import {BaseModel} from './base'
import {QueryOptions} from '../shared/types/QueryOptions'
import {Route} from '../@types/decorators'

export class TeacherModel extends BaseModel {
  constructor() {
    super('Teacher')
  }

  getSkills = async (queries?: QueryOptions) => {
    let allTeachers = this.storage
      .select('Skill.*')
      .join('Teacher', 'Skill.id', 'Teacher.id')
    if (!queries) {
      return await allTeachers
    }
    const filtered = this.pagination(queries, allTeachers)
    return await filtered
  }

  addSkill = async (queries?: QueryOptions) => {
    let allTeachers = this.storage
      .select('Skill.*')
      .join('Teacher', 'Skill.id', 'Teacher.id')
    if (!queries) {
      return await allTeachers
    }
    const filtered = this.pagination(queries, allTeachers)
    return await filtered
  }

  @Route('delete', ':id/hobbies')
  deleteSkill = async (queries?: QueryOptions) => {
    let allTeachers = this.storage
      .select('Skill.*')
      .join('Teacher', 'Skill.id', 'Teacher.id')
    if (!queries) {
      return await allTeachers
    }
    const filtered = this.pagination(queries, allTeachers)
    return await filtered
  }
}
