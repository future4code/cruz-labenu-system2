import {RequestHandler} from 'express'
import {Model, ModelConstructor} from '../models/BaseModel'

interface Controller<M> {
  model: Model<M>
  getAll: RequestHandler
}

export abstract class BaseController<M> implements Controller<M> {
  model: Model<M>
  constructor(model: ModelConstructor<M>) {
    this.model = new model()
  }

  getAll: RequestHandler = (req, res) => res.send(this.model.getAll())
  
  create: RequestHandler = (req, res) => {
    const newClass = req.body
    
    
  }
}
