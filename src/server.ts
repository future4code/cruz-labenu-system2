import express, {Express} from 'express'
import cors from 'cors'
import {pingRoute} from './routes/ping'
import {classRoute} from './routes/class'
import {studentRoute} from './routes/student'
import {teacherRoute} from './routes/teacher'
import {hobbiesRoute} from './routes/hobbies'
import {skillsRoute} from './routes/skills'
import {teacherSkillsRoute} from './routes/teacherSkills'
import {studentHobbiesRoute} from './routes/studentHobbies'
import {errorHandler} from './middlewares/errorHandler'
import {notFound} from './routes/notFound'
import {ClassController} from './controllers/ClassController'
import {validateId} from './utils/validators/validate-id'
import {RouteSetup} from './@types/decorators'
import * as Controllers from './controllers'
import {Controller} from './controllers/BaseController'

export class ExpressServer {
  app!: Express
  api!: Express
  constructor(
    public port: number = 3000,
    public message: string = 'Welcome to ur server!'
  ) {}

  async init() {
    this.app = express()
    this.api = express()
    this.app.use('/api', this.api)
    this.setupMiddlewares()
    this.addControllers(Controllers)
    this.setupStaticRoutes()
  }

  addControllers(controllers: Record<string, new () => Controller>) {
    Object.values(controllers).forEach((controller: new () => Controller) => {
      const currentController = new controller()
      const router = express.Router()
      const path = Reflect.getMetadata('path', controller)
      const routes = Reflect.getMetadata('route', controller.prototype)
      routes.forEach(([method, route, handler]) => {
        router[method](route, currentController[handler])
      })

      this.api.use(path, router)
    })
  }

  setupStaticRoutes() {
    this.app.use('/', express.static('public/app/build'))
    this.api.use('/', express.static('public/api'))
  }

  setupMiddlewares() {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use('/*/:id', validateId)
    this.app.use(notFound)
    this.app.use(errorHandler)
  }
}
