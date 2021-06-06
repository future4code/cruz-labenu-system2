import {ClassSearchOptions} from '../../shared/types/ClassSearchOptions'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {classSearchOptions} from '../schemas/class-search-options'
import {errorMessage} from './error-message'

const ajv = new Ajv({allErrors: true, coerceTypes: true})
addFormats(ajv)

export const validateClassSearchOptions = (options: ClassSearchOptions) => {
  const validator = ajv.compile(classSearchOptions)

  if (!validator(options)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, classSearchOptions)
    throw ApiError.badRequest(message)
  }
}
