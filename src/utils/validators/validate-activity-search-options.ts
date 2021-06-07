import {ActivitySearchOptions} from '../../shared/types/ActivitySearchOptions'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {activitySearchOptions} from '../schemas'
import {errorMessage} from './error-message'

const ajv = new Ajv({allErrors: true, coerceTypes: true})
addFormats(ajv)

export const validateActivitySearchOptions = (
  options: ActivitySearchOptions
) => {
  const validator = ajv.compile(activitySearchOptions)

  if (!validator(options)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, activitySearchOptions)
    throw ApiError.badRequest(message)
  }
}
