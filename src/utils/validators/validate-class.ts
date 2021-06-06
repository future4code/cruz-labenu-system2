import {Class} from '../../shared/entities/Class'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {classAllProps} from '../schemas/class-all-props'
import {classAnyProps} from '../schemas/class-any-props'
import {errorMessage} from './error-message'

const ajv = new Ajv({allErrors: true, coerceTypes: true})
addFormats(ajv)

export const validateAllInClass = (classToValidate: Partial<Class>) => {
  const validator = ajv.compile(classAllProps)

  if (!validator(classToValidate)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, classAllProps)
    throw ApiError.badRequest(message)
  }
}

export const validateSomeInClass = (classToValidate: Partial<Class>) => {
  const validator = ajv.compile(classAnyProps)

  if (!validator(classToValidate)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, classAnyProps)
    throw ApiError.badRequest(message)
  }
}
