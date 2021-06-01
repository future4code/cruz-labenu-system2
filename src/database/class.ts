import {connection} from '.'

const classTable = () => connection('Class')

export type Class = {
  id: string
  name: string
  startDate: string
  endDate: string
  module: string
}

export const getAllClass = async () => classTable()

export const createClass = async (newClass: Class) =>
  classTable().insert(newClass)

export const updateClass = async (id: string, classData: Omit<Class, 'id'>) =>
  classTable().update(classData).where({id})

export const deleteClass = async (id: string) =>
  classTable().delete().where({id})
