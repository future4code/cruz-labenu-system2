import {RequestHandler} from 'express'
import {Services} from '../services/BaseServices'
import {AllEntities, BaseEntitie} from '../shared/entities/AllEntities'
import {Route, MainRoute} from '../@types/decorators'

export interface Controller {
  services: Services
  getAll: RequestHandler
}

@MainRoute('sdfsdf')
export class BaseController implements Controller {
  services: Services
  constructor(services: new () => Services) {
    this.services = new services()
  }

  @Route('get', 'list')
  getAll: RequestHandler = async (req, res) => {
    const resultList = this.services.listAll(req.query)
    res.send(resultList)
  }

  @Route('get', 'list')
  update: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {data} = req.body
    const dataUpdated = this.services.update(id, data)
    res.send(dataUpdated)
  }

  delete: RequestHandler = async (req, res) => {
    const {id} = req.params
    const dataDeleted = await this.services.delete(id)
    res.send(dataDeleted)
  }

  create: RequestHandler = async (req, res) => {
    const data = req.body
    const dataCreated = this.services.create(data)
    res.send(dataCreated)
  }
}
