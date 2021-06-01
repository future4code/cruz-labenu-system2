import {NextFunction, Request, Response} from 'express'
import {ApiError} from './ApiError'

export async function errorHandler(
  error: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    res.status(error.code).send(error.message)
  } else {
    res.status(500).send('Unknown error, callme about it please')
  }
}
