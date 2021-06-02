import {NextFunction, Request, Response} from 'express'
import {ApiError} from './ApiError'

export async function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    res.status(error.code).send(error.message)
  } else if (error.sqlMessage) {
    res.status(400).send(error.sqlMessage)
  } else {
    console.log({error})
    console.log(error.name)
    res.status(500).send('Unknown error, callme about it please')
  }
}
