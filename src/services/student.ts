import {BaseServices} from './base'
import {validateAllInUser, validateSomeInUser} from '../utils/validators'
import {QueryOptions} from '../shared/types/QueryOptions'
import {ApiError} from '../utils/ApiError'
import {StudentModel} from '../models/student'
import {validateUserSearchOptions} from '../utils/validators'
import {v4 as uuid} from 'uuid'

export class StudentServices extends BaseServices {
  model: StudentModel
  constructor() {
    super({
      queries: validateUserSearchOptions,
      allProps: validateAllInUser,
      someProps: validateSomeInUser
    })
    this.model = new StudentModel()
  }

  getHobbies = async (id: string, query: QueryOptions) => {
    const studentsHobbies = await this.model.getHobbies(id)

    if (!studentsHobbies) {
      throw ApiError.badRequest({message: 'No hobbies yet'})
    }
    return studentsHobbies
  }

  addHobbie = async (student_id: string, hobbie_id: string) => {
    const id = uuid()

    const newStudentHobbie = {
      id,
      student_id,
      hobbie_id
    }

    return this.model.addHobbie(newStudentHobbie)
  }

  deleteHobbie = async (student_id: string, hobbie_id: string) => {
    const studentsInClass = await this.model.deleteHobbie({
      student_id,
      hobbie_id
    })

    if (!studentsInClass) {
      throw ApiError.badRequest({message: 'NO students here'})
    }
    return studentsInClass
  }
}
