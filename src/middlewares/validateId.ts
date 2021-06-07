import {RequestHandler} from 'express'
import {validateId} from '../utils/validators/validate-id'

export const validateIdInRoutes: RequestHandler = (req, res, next) => {
  const {id} = req.params
  console.log('validating ID in route middleware...')
  validateId(id)
  next()
}
