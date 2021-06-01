import {Router} from 'express'

export const pingRoute = Router()

pingRoute.get('/', (req, res) => res.send('Pong!'))
