import {NextFunction, Request, Response} from 'express'
import {ApiError} from '../utils/ApiError'
import colors from 'colors'
colors.enable()

export async function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    console.log('API ERROR')
    res.status(error.code).send({error: error.message})
  } else if (error.sqlMessage) {
    console.log('SQL ERROR')
    res.status(400).send({error: error.sqlMessage})
  } else {
    console.log('UNKNOWN ERROR')
    console.log(error)
    res.status(500).send({error: 'Something went wrong, call the police!'})
  }
}
