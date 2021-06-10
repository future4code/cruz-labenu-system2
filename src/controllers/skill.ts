import {BaseController} from './base'
import {MainRoute} from '../@types/decorators'
import {ActivityServices} from '../services/activity'
import {SkillModel} from '../models/skill'

@MainRoute('/skill')
export class SKillController extends BaseController {
  services: ActivityServices
  constructor() {
    super()
    this.services = new ActivityServices(SkillModel)
  }
}
