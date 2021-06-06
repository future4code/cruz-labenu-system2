import {BaseController} from './BaseController'
import {Class} from '../shared/entities/Class'
import {RequestHandler} from 'express'
import {ClassServices} from '../services/ClassServices'
import {MainRoute, Route} from '../@types/decorators'

@MainRoute('/class')
export class ClassController extends BaseController {
  constructor() {
    super(ClassServices)
  }

  @Route('get', ':id/students')
  students: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const students = await this.services.getStudents(id, query)
    res.send(students)
  }

  @Route('get', ':id/teachers')
  teachers: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const teachers = await this.services.getTeachers(id, query)
    res.send(teachers)
  }
}
