import {BaseController} from './BaseController'
import {Class} from '../shared/entities/Class'
import {RequestHandler} from 'express'
import {ModelConstructor} from '../models/BaseModel'
import {validateAllInClass} from '../utils/validators/validate-class'
import {v4 as uuid} from 'uuid'

export class ClassController extends BaseController<Class> {
  constructor(model: ModelConstructor<Class>) {
    super(model)
  }

  getAll: RequestHandler = async (req, res) => {
    const allClasses = await this.model.getAll()

    res.send(allClasses)
  }

  create: RequestHandler = async (req, res) => {
    const newClass = req.body
    validateAllInClass(newClass)
    const id = uuid()
    const classData = {
      id,
      ...newClass
    }
    await this.model.save(classData)
    res.send(classData)
  }
}
