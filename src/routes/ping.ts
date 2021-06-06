import {Router} from 'express'
import {ClassController} from '../controllers/ClassController'
import {ClassModel} from '../models/ClassModel'

export const pingRoute = Router()
const classController = new ClassController()

pingRoute.get('/', classController.getAll)
// pingRoute.post('/', classController.create)
// pingRoute.put('/:id', classController.update)
// pingRoute.delete('/:id', classController.delete)
