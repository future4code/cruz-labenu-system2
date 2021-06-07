import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {ApiError} from '../ApiError'
import {errorMessage} from './error-message'

export const validateId = (id: string) => {
  const ajv = new Ajv({allErrors: true})
  addFormats(ajv)

  const idSchema = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'uuid'
      }
    }
  }

  const idValidator = ajv.compile(idSchema)
  const isValid = idValidator({id})

  if (!isValid) {
    throw ApiError.badRequest(errorMessage(idValidator.errors))
  }

  return isValid
}
