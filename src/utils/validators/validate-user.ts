import {User} from '../../shared/entities'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {errorMessage} from './error-message'
import {userAllProps, userAnyProps} from '../schemas'

const ajv = new Ajv({allErrors: true, coerceTypes: true})
addFormats(ajv)

export const validateAllInUser = (userToValidate: Partial<User>) => {
  const validator = ajv.compile(userAllProps)

  if (!validator(userToValidate)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, userAllProps)
    throw ApiError.badRequest(message)
  }
}

export const validateSomeInUser = (userToValidate: Partial<User>) => {
  const validator = ajv.compile(userAnyProps)

  if (!validator(userToValidate)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, userAnyProps)
    throw ApiError.badRequest(message)
  }
}
