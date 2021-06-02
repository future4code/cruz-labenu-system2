import { Class } from '../database/class'
import { Student } from '../database/student'
import { Hobbies } from '../database/hobbies'
import { StudentHobbies } from '../database/studentHobbies'
import { TeacherSkills } from '../database/teacherSkills'
import { ApiError } from './ApiError'


export const classValidator = (newClass: Omit<Class, 'id'>) => {
  const { name, startDate, endDate, module } = newClass
  if (!name || !startDate || !endDate || !module) {
    throw ApiError.wrongParams(
      'Please inform name, startDate, endDate and module!'
    )
  }

  if (!Number(module)) {
    throw ApiError.wrongParams('Module need to be a valid number')
  }

  if (!dateValidator(startDate) || !dateValidator(endDate)) {
    throw ApiError.wrongParams('inform valid date for start and end')
  }

  return newClass
}

export const dateValidator = (date: string) => {
  const newDate = new Date(date)

  if (!isNaN(newDate.getTime())) {
    return true
  }
}

// student and teachers

export const userValidator = (newUser: Omit<Student, 'id'>) => {
  const { name, email, birthDate, class_id } = newUser
  if (!name || !email || !birthDate || !class_id) {
    throw ApiError.wrongParams(
      'Please inform name, email, birthDate and class!'
    )
  }

  if (!dateValidator(birthDate)) {
    throw ApiError.wrongParams('Please enter a valid date of birth')
  }

  return newUser
}

// hobbies and skills

export const hobbieAndSkillValidator = (newData: Omit<Hobbies, 'id'>) => {
  const { name } = newData
  if (!name) {
    throw ApiError.wrongParams(
      'Please inform name!'
    )
  }
  return newData
}

export const relationshipSkillValidator = (newData: TeacherSkills) => {
  const { teacher_id, skill_id } = newData
  if (!teacher_id || !skill_id) {
    throw ApiError.wrongParams(
      'Please inform teacher id and skill id!'
    )
  }
  return newData
}

export const relationshipHobbieValidator = (newData: StudentHobbies) => {
  const { student_id, hobbies_id } = newData
  if (!student_id || !hobbies_id) {
    throw ApiError.wrongParams(
      'Please inform student id and hobbies id!'
    )
  }
  return newData
}
