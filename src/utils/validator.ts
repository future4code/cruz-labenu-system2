import {Class} from '../database/class'
import {Student} from '../database/student'
import {ApiError} from './ApiError'

export const classValidator = (newClass: Omit<Class, 'id'>) => {
  const {name, startDate, endDate, module} = newClass
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

// student

export const userValidator = (newStudent: Omit<Student, 'id'>) => {
  const {name, email, birthDate, class_id} = newStudent
  if (!name || !email || !birthDate || !class_id) {
    throw ApiError.wrongParams(
      'Please inform name, email, birthDate and class!'
    )
  }

  if (!dateValidator(birthDate)) {
    throw ApiError.wrongParams('Please enter a valid date of birth')
  }

  return newStudent
}
