import {BaseServices} from './base'
import {
  validateAllInActivity,
  validateSomeInActivity
} from '../utils/validators'
import {validateActivitySearchOptions} from '../utils/validators'
import {Model, ModelConstructor} from '../models/base'

export class ActivityServices extends BaseServices {
  model: Model
  constructor(model: ModelConstructor) {
    super({
      queries: validateActivitySearchOptions,
      allProps: validateAllInActivity,
      someProps: validateSomeInActivity
    })
    this.model = new model()
  }
}
