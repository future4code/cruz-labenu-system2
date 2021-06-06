import {RequestHandler} from 'express'
import {validateId} from '../utils/validators/validate-id'

export const validateIdInRoutes: RequestHandler = (req, res, next) => {
  const {id} = req.params
  validateId(id)
  next()
}
