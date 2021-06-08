import {Request, Response} from 'express'
import {getFullHostName} from '../utils/requestProps'

export const notFound = (req: Request, res: Response) => {
  const link = getFullHostName(req) + '/api'

  const message = `
  <h1>
    This route dont exist, please see all endpoints of Labenu System API in 
    <a href=${link}>${link}</a>
  </h1>`
  res.send(message)
}
