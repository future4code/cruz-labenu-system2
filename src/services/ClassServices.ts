import {Class} from '../shared/entities/Class'
import {validateClassSearchOptions} from '../utils/validators/validate-class-search-options'
import {ClassModel} from '../models/ClassModel'
import {BaseServices} from './BaseServices'
import {
  validateAllInClass,
  validateSomeInClass
} from '../utils/validators/validate-class'
import {QueryOptions} from '../shared/types/QueryOptions'
import {ApiError} from '../utils/ApiError'
import {Model} from '../models/BaseModel'

export class ClassServices extends BaseServices {
  test: Model
  constructor() {
    super(ClassModel, {
      queries: validateClassSearchOptions,
      allProps: validateAllInClass,
      someProps: validateSomeInClass
    })
    this.test = new ClassModel()
  }

  getStudents = async (id: string, query: QueryOptions) => {
    const studentsInClass = await this.model.getStudents(query)

    if (!studentsInClass) {
      throw ApiError.badRequest({message: 'NO students here'})
    }
    return studentsInClass
  }

  getTeachers = async (id: string, query: QueryOptions) => {
    const teachersInClass = await this.model.getTeachers(query)

    if (!teachersInClass) {
      throw ApiError.badRequest({message: 'NO students here'})
    }
    const a = new ClassModel()
    a.getStudents()
    return teachersInClass
  }
}
