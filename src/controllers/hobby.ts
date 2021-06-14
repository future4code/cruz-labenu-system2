import {BaseController} from './base'
import {MainRoute} from '../@types/decorators'
import {ActivityServices} from '../services/activity'
import {HobbyModel} from '../models/hobby'

@MainRoute('/hobby')
export class HobbyController extends BaseController {
  services: ActivityServices
  constructor() {
    super()
    this.services = new ActivityServices(HobbyModel)
  }
}
