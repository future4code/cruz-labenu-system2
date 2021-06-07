import {RequestHandler} from 'express'
import {AllEntities, BaseEntitie} from '../shared/entities/AllEntities'
import {Route, MainRoute} from '../@types/decorators'
import {Services} from '../services/base'

export interface Controller {
  services: Services
  getAll: RequestHandler
}

export abstract class BaseController implements Controller {
  abstract services: Services
  constructor() {}

  @Route('get', '/')
  getAll: RequestHandler = async (req, res) => {
    const resultList = await this.services.listAll(req.query)
    res.send(resultList)
  }

  @Route('post', '/')
  create: RequestHandler = async (req, res) => {
    const data = req.body
    const dataCreated = this.services.create(data)
    res.send(dataCreated)
  }

  @Route('put', '/:id')
  update: RequestHandler = async (req, res) => {
    const {id} = req.params
    const {data} = req.body
    const dataUpdated = this.services.update(id, data)
    res.send(dataUpdated)
  }

  @Route('delete', '/:id')
  delete: RequestHandler = async (req, res) => {
    const {id} = req.params
    const dataDeleted = await this.services.delete(id)
    res.send(dataDeleted)
  }
}
