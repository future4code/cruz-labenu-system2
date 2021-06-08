import express, {Express} from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {errorHandler, validateIdInRoutes, notFound} from './middlewares'
import * as Controllers from './controllers'
import {Controller} from './controllers/base'
import open from 'open'

type HttpMethods = 'get' | 'post' | 'put' | 'delete' | 'patch'
type RouteData = [method: HttpMethods, route: string, handler: string]

export class ExpressServer {
  app!: Express
  api!: Express
  constructor(
    public port: number = 3000,
    public message: string = 'Welcome to ur server!'
  ) {}

  async init() {
    console.log('Starting the app...'.red)
    this.app = express()
    this.api = express()
    this.app.use('/api', this.api)
    this.setupMiddlewares()
    this.setupStaticRoutes()
    this.addControllers(Controllers)
    this.setupFinalHanderls()
  }

  addControllers(controllers: Record<string, new () => Controller>) {
    console.log('Setting controllers and routes...'.red)
    Object.values(controllers).forEach((controller: new () => Controller) => {
      const currentController = new controller()
      const router = express.Router()
      const path = Reflect.getMetadata('path', controller)
      const routes: RouteData[] = Reflect.getMetadata(
        'route',
        controller.prototype
      )
      console.log(`Route ${path}, using controller ${controller.name}`.blue)
      routes.forEach(([method, route, handler]) => {
        return router[method](
          route,
          currentController[handler as keyof Omit<Controller, 'services'>]
        )
      })

      this.api.use(path, router)
    })
  }

  setupMiddlewares() {
    this.app.use(express.json())
    this.app.use(cors())
    this.api.use(express.json())
    this.api.use(cors())
    this.app.use(morgan('dev'))
    this.api.use('/\\w+/:id', validateIdInRoutes)
    this.app.use(errorHandler)
  }

  setupStaticRoutes() {
    this.api.use('/', express.static('public/api'))
    this.app.use('/', express.static('public/app/build'))
  }

  setupFinalHanderls() {
    this.app.use(notFound)
  }

  async listen() {
    this.app.listen(this.port, () =>
      console.log(`${this.message}, running at port ${this.port}`.green)
    )
    await open(`http://localhost:${this.port}`)
  }
}
