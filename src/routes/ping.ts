import {Router} from 'express'
import {ClassController} from '../controllers/ClassController'
import {ClassModel} from '../models/ClassModel'

export const pingRoute = Router()
const gradeController = new ClassController(ClassModel)

pingRoute.get('/', gradeController.getAll)
pingRoute.post('/', gradeController.create)
