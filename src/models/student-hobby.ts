import {BaseModel} from './base'
import {ActivityRecord} from '../shared/entities'

export class StudentHobbyModel extends BaseModel {
  constructor() {
    super('StudentHobbies')
  }

  addStudentHobbie = async (newHobbie: ActivityRecord) =>
    this.storage.insert(newHobbie)

  deleteStudentHobbie = async (dataToDelete: Omit<ActivityRecord, 'id'>) =>
    this.storage.delete().where(dataToDelete)

  countStudentHobbies = async () => {
    let resultCount = await this.storage
      .select('Hobbies.name')
      .count('StudentHobbie.id as Amount')
      .join('Hobbies', 'Hobbies.id', 'StudentHobbie.id')
      .groupBy('Hobbie.name as Amounttt')

    return resultCount
  }
}
