import {Knex} from 'knex'
import {connection} from '../database'

export interface Model<M> {
  storage: Knex.QueryBuilder
  getAll: () => Promise<void>
  save: (entity: M) => void
  findAll: (props: Partial<M>) => void
  findOne: (props: Partial<M>) => void
  update: (id: string, props: Partial<M>) => void
  delete: (id: string, props: Partial<M>) => void
}

export type ModelConstructor<M> = new () => Model<M>

export abstract class BaseModel<M> implements Model<M> {
  _storage: () => Knex.QueryBuilder

  constructor(tableName: string) {
    this._storage = () => connection(tableName)
  }

  get storage(): Knex.QueryBuilder {
    return this._storage()
  }

  // getAll = async () => this.storage
  async getAll() {
    return this.storage
  }
  save = async (entity: M) => this.storage.insert(entity)
  findAll = async (props: Partial<M>) => this.storage.where(props)
  findOne = async (props: Partial<M>) => this.storage.where(props).limit(1)
  update = async (id: string, entity: Partial<M>) =>
    this.storage.update(entity).where({id})
  delete = async (id: string, entity: Partial<M>) =>
    this.storage.delete().where({id})
}
