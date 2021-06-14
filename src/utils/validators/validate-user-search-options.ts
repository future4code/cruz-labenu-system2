import {UserSearchOptions} from '../../shared/types/UserSearchOptions'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {userSearchOptions} from '../schemas/user-search-options'
import {errorMessage} from './error-message'

const ajv = new Ajv({allErrors: true, coerceTypes: true})
addFormats(ajv)

export const validateUserSearchOptions = (options: UserSearchOptions) => {
  const validator = ajv.compile(userSearchOptions)

  if (!validator(options)) {
    console.log(validator.errors)
    const message = errorMessage(validator.errors, userSearchOptions)
    throw ApiError.badRequest(message)
  }
}
