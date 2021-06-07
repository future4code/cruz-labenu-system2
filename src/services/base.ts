import {Model, ModelConstructor} from '../models/base'
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

export type MessageResponse = {
  message: string
}

export interface Services {
  listAll: (query: QueryOptions) => Promise<void>
  create: (newData: Partial<AllEntities>) => Promise<void | number[]>
  update: (
    id: string,
    data: Omit<AllEntities, 'id'>
  ) => Promise<MessageResponse>
  delete: (id: string) => Promise<MessageResponse>
}

export abstract class BaseServices implements Services {
  abstract model: Model

  constructor(protected validators: Validators) {}

  listAll = async (query: QueryOptions) => {
    if (query) {
      this.validators.queries(query)
      return this.model.getFiltered(query)
    }
    return this.model.getAll()
  }

  create = async (newData: Partial<AllEntities>) => {
    this.validators.allProps(newData)
    const id = uuid()
    const data = {
      id,
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
