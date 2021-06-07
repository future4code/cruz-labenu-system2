import {BaseController} from './base'
import {RequestHandler} from 'express'
import {MainRoute, Route} from '../@types/decorators'
import {StudentServices} from '../services/student'

@MainRoute('/student')
export class StudentController extends BaseController {
  services: StudentServices
  constructor() {
    super()
    this.services = new StudentServices()
  }

  @Route('get', '/:id/hobbies')
  listHobbies: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const students = await this.services.getHobbies(id, query)
    res.send(students)
  }

  @Route('post', '/:id/hobbies')
  addHobbie: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const students = await this.services.getHobbies(id, query)
    res.send(students)
  }

  @Route('delete', '/:id/hobbies')
  deleteHobbie: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const students = await this.services.getHobbies(id, query)
    res.send(students)
  }
}
