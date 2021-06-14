import {BaseModel} from './base'
import {QueryOptions} from '../shared/types/QueryOptions'

export class SkillModel extends BaseModel {
  constructor() {
    super('Skills')
  }

  getTeachers = async (id: string, queries?: QueryOptions) => {
    let allTeachers = this.storage
      .select('Teacher.id', 'Teacher.name')
      .join('TeacherSkills', 'TeacherSkills.student_id', 'Teacher.id')
      .where('TeacherSkill.skill_id', id)

    if (!queries) {
      return await allTeachers
    }
    const filtered = this.pagination(queries, allTeachers)
    return await filtered
  }
}
