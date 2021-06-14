import {BaseController} from './base'
import {RequestHandler} from 'express'
import {MainRoute, Route} from '../@types/decorators'
import {TeacherServices} from '../services/teacher'

@MainRoute('/teacher')
export class TeacherController extends BaseController {
  services: TeacherServices
  constructor() {
    super()
    this.services = new TeacherServices()
  }

  @Route('get', '/:id/hobbies')
  listSkills: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const teachers = await this.services.getSkills(id, query)
    res.send(teachers)
  }

  @Route('post', '/:id/hobbies')
  addSkill: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const teachers = await this.services.getSkills(id, query)
    res.send(teachers)
  }

  @Route('delete', '/:id/hobbies')
  deleteSkill: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {query} = req
    const teachers = await this.services.getSkills(id, query)
    res.send(teachers)
  }
}
