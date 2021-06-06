import {Model, ModelConstructor} from '../models/BaseModel'
import {QueryOptions} from '../shared/types/QueryOptions'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'
import {AllEntities, BaseEntitie} from '../shared/entities/AllEntities'

type Validators = {
  [key: string]: (args: any) => void
  queries: (args: QueryOptions) => void
  allProps: (args: Partial<AllEntities>) => void
  someProps: (args: Partial<AllEntities>) => void
}

// export interface Services {
//   model: Model
//   validators: Validators
//   listAll: (query: QueryOptions) => Promise<any>
//   create: (data: Partial<AllEntities>) => Promise<any>
//   update: (id: string, data: Omit<AllEntities, 'id'>) => Promise<any>
//   delete: (id: string) => Promise<any>
// }

export abstract class BaseServices {
  model: Model

  constructor(model: ModelConstructor, public validators: Validators) {
    this.model = new model()
  }

  listAll = async (query: QueryOptions) => {
    if (query) {
      this.validators.queries(query)
      return await this.model.getFiltered(query)
    }
    return await this.model.getAll()
  }

  create = async (newData: Partial<AllEntities>) => {
    this.validators.allProps(newData)
    const id = uuid()
    const data = {
      id: 'sdfsdfsdf',
      ...newData
    }

    return await this.model.save(data as AllEntities)
  }

  update = async (id: string, data: Omit<AllEntities, 'id'>) => {
    this.validators.validateSomeInClass(data)
    const isClassUpdated = await this.model.update(id as string, data)
    if (isClassUpdated) {
      return {message: 'updated success!'}
    }
    throw ApiError.badRequest({message: 'This user ID dont exist'})
  }

  delete = async (id: string) => {
    const isClassDeleted = await this.model.delete(id)
    if (isClassDeleted) {
      return {message: 'deleted success!'}
    }
    throw ApiError.badRequest({message: 'This user ID dont exist'})
  }
}
