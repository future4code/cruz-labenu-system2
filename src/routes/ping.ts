import {Router} from 'express'
import {ClassController} from '../controllers/class'
import {ClassModel} from '../models/class'

export const pingRoute = Router()
const classController = new ClassController()

pingRoute.get('/', classController.getAll)
// pingRoute.post('/', classController.create)
// pingRoute.put('/:id', classController.update)
// pingRoute.delete('/:id', classController.delete)
