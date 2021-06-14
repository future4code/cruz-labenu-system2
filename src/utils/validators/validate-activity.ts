import {Activity} from '../../shared/entities'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {errorMessage} from './error-message'
import {activityAllProps, activityAnyProps} from '../schemas'

const ajv = new Ajv({allErrors: true, coerceTypes: true})
addFormats(ajv)

export const validateAllInActivity = (
  activityToValidate: Partial<Activity>
) => {
  const validator = ajv.compile(activityAllProps)

  if (!validator(activityToValidate)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, activityAllProps)
    throw ApiError.badRequest(message)
  }
}

export const validateSomeInActivity = (
  activityToValidate: Partial<Activity>
) => {
  const validator = ajv.compile(activityAnyProps)

  if (!validator(activityToValidate)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, activityAnyProps)
    throw ApiError.badRequest(message)
  }
}
