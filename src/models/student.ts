import {BaseModel} from './base'
import {QueryOptions} from '../shared/types/QueryOptions'
import {Route} from '../@types/decorators'
import {StudentHobbyModel} from './student-hobby'
import {Activity} from '../shared/entities'
import {ActivityRecord} from '../shared/entities/ActivityRecord'

export class StudentModel extends BaseModel {
  hobbies: StudentHobbyModel
  constructor() {
    super('Student')
    this.hobbies = new StudentHobbyModel()
  }

  getHobbies = async (id: string) => {
    const studentHobby = new StudentHobbyModel()

    let allHobbies = await this.storage
      .select('Hobbie.*')
      .join('StudentHobbie', 'StudentHobbie.student_id', id)
    return allHobbies
  }

  addHobbie = async (newStudentHobbie: ActivityRecord) => {
    const studentHobby = new StudentHobbyModel()
    return studentHobby.addStudentHobbie(newStudentHobbie)
  }

  deleteHobbie = async (dataToDelete: Omit<ActivityRecord, 'id'>) =>
    this.hobbies.storage.delete().where(dataToDelete)
}
