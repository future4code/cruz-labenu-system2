import {Class} from '../../shared/entities/Class'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {classAllPropsWithoutId} from '../schemas/class-all-props'
import {errorMessage} from './error-message'

const ajv = new Ajv({allErrors: true, coerceTypes: true})
addFormats(ajv)

export const validateAllInClass = (classToValidate: Omit<Class, 'id'>) => {
  const validator = ajv.compile(classAllPropsWithoutId)

  if (!validator(classToValidate)) {
    console.log(validator.errors)
    throw ApiError.badRequest(errorMessage(validator.errors))
  }
}
