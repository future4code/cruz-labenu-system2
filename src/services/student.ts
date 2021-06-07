import {validateClassSearchOptions} from '../utils/validators/validate-class-search-options'
import {ClassModel} from '../models/class'
import {BaseServices} from './base'
import {
  validateAllInClass,
  validateSomeInClass
} from '../utils/validators/validate-class'
import {QueryOptions} from '../shared/types/QueryOptions'
import {ApiError} from '../utils/ApiError'
import {StudentModel} from '../models/student'

export class StudentServices extends BaseServices {
  model: StudentModel
  constructor() {
    super({
      queries: validateClassSearchOptions,
      allProps: validateAllInClass,
      someProps: validateSomeInClass
    })
    this.model = new StudentModel()
  }

  getHobbies = async (id: string, query: QueryOptions) => {
    const studentsInClass = await this.model.getHobbies(query)

    if (!studentsInClass) {
      throw ApiError.badRequest({message: 'NO students here'})
    }
    return studentsInClass
  }

  addHobbie = async (id: string, query: QueryOptions) => {
    const studentsInClass = await this.model.addHobbie(query)

    if (!studentsInClass) {
      throw ApiError.badRequest({message: 'NO students here'})
    }
    return studentsInClass
  }

  deleteHobbie = async (id: string, query: QueryOptions) => {
    const studentsInClass = await this.model.deleteHobbie(query)

    if (!studentsInClass) {
      throw ApiError.badRequest({message: 'NO students here'})
    }
    return studentsInClass
  }
}
