import {Request} from 'express-serve-static-core'

export const getFullHostName = (req: Request) =>
  `${req.protocol}://${req.hostname}`
