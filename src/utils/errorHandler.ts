import {NextFunction, Request, Response} from 'express'
import {ApiError} from './ApiError'
import colors from 'colors'
colors.enable()

export async function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    console.log('API ERROR'.red)
    res.status(error.code).send(error.message)
  } else if (error.sqlMessage) {
    console.log('SQL ERROR'.red)
    res.status(400).send(error.sqlMessage)
  } else {
    console.log('UNKNOWN ERROR'.red)
    res.status(500).send('Unknown error, callme about it please')
  }
}
