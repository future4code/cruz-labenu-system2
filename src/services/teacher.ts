import {BaseServices} from './base'
import {
  validateAllInUser,
  validateSomeInUser,
  validateUserSearchOptions
} from '../utils/validators'
import {QueryOptions} from '../shared/types/QueryOptions'
import {ApiError} from '../utils/ApiError'
import {TeacherModel} from '../models/teacher'

export class TeacherServices extends BaseServices {
  model: TeacherModel
  constructor() {
    super({
      queries: validateUserSearchOptions,
      allProps: validateAllInUser,
      someProps: validateSomeInUser
    })
    this.model = new TeacherModel()
  }

  getSkills = async (id: string, query: QueryOptions) => {
    const teachersInClass = await this.model.getSkills(query)

    if (!teachersInClass) {
      throw ApiError.badRequest({message: 'NO teachers here'})
    }
    return teachersInClass
  }

  addSkill = async (id: string, query: QueryOptions) => {
    const teachersInClass = await this.model.addSkill(query)

    if (!teachersInClass) {
      throw ApiError.badRequest({message: 'NO teachers here'})
    }
    return teachersInClass
  }

  deleteSkill = async (id: string, query: QueryOptions) => {
    const teachersInClass = await this.model.deleteSkill(query)

    if (!teachersInClass) {
      throw ApiError.badRequest({message: 'NO teachers here'})
    }
    return teachersInClass
  }
}
