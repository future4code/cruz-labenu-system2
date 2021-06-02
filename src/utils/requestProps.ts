import {Request} from 'express'

export const getFullHostName = (req: Request) =>
  `${req.protocol}://${req.get('host')}`
