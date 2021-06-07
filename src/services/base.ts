import {Model, ModelConstructor} from '../models/base'
import {QueryOptions} from '../shared/types/QueryOptions'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'
import {AllEntities, BaseEntitie} from '../shared/entities/AllEntities'
import {validateId} from '../utils/validators'

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
  create: (newData: Partial<AllEntities>) => Promise<any>
  detail: (id: string) => Promise<any>
  update: (
    id: string,
    data: Omit<AllEntities, 'id'>
  ) => Promise<MessageResponse>
  delete: (id: string) => Promise<MessageResponse>
}

export abstract class BaseServices implements Services {
  abstract model: Model
  protected validators: Validators

  constructor(validators: Validators) {
    this.validators = validators
    this.validators.id = validateId
  }

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

    const dataCreated = await this.model.save(data as AllEntities)
    if (dataCreated) {
      return data
    }
    throw ApiError.internal()
  }

  detail = async (id: string) => {
    this.validators.id(id)
    const searchResult = await this.model.findOne({id})
    if (searchResult! && Object.keys(searchResult!).length) {
      return searchResult
    }
    throw ApiError.badRequest({message: 'This user ID dont exist'})
  }

  update = async (id: string, data: Omit<AllEntities, 'id'>) => {
    this.validators.someProps(data)
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
