import {BaseController} from './base'
import {MainRoute, Route} from '../@types/decorators'
import {HobbyServices} from '../services/hobby'

@MainRoute('/hobby')
export class HobbyController extends BaseController {
  services: HobbyServices
  constructor() {
    super()
    this.services = new HobbyServices()
  }
}
