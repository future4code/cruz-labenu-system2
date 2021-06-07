import 'reflect-metadata'

export const MainRoute = (path: string) => (target: any) => {
  Reflect.defineMetadata('path', path, target)
}

export const Route =
  (method: string, route: string) => (target: any, key: string) => {
    const previousRoute = Reflect.getMetadata('route', target) || []
    Reflect.defineMetadata(
      'route',
      [...previousRoute, [method, route, key]],
      target
    )
  }

export const RouteSetup = (target: any): new (...args: any[]) => any => {
  return class extends target {
    constructor(...args: any[]) {
      super(args)
      if (!target.app) {
        throw new Error('No app to setup here, initialize it first!')
      }
      this.addControllers = addControllers
    }
  }
}

function addControllers(controllers: any) {
  Object.values(controllers).forEach((controller: any) => {
    const all = Reflect.getMetadataKeys(controller)
  })
}
