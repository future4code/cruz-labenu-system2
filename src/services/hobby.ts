import {BaseServices} from './base'
import {
  validateAllInActivity,
  validateSomeInActivity
} from '../utils/validators'
import {QueryOptions} from '../shared/types/QueryOptions'
import {ApiError} from '../utils/ApiError'
import {HobbyModel} from '../models/hobby'
import {validateActivitySearchOptions} from '../utils/validators'
import {v4 as uuid} from 'uuid'

export class HobbyServices extends BaseServices {
  model: HobbyModel
  constructor() {
    super({
      queries: validateActivitySearchOptions,
      allProps: validateAllInActivity,
      someProps: validateSomeInActivity
    })
    this.model = new HobbyModel()
  }
}
