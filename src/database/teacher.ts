import {connection} from '.'

const teacherTable = () => connection('Teacher')

export type Teacher = {
  id: string
  name: string
  email: string
  birthDate: string
  class_id: string
}

export const getAllTeachers = async () => {
  const allTeachers = await teacherTable()
  return allTeachers
}

export const createTeacher = async (newTeacher: Teacher) => {
  const teacher = teacherTable().insert(newTeacher)
  return teacher
}

export const updateTeacher = async (
  id: string,
  teacherData: Omit<Teacher, 'id'>
) => {
  teacherTable().update(teacherData).where({id})
}

export const deleteTeacher = async (id: string) => {
  teacherTable().delete().where({id})
}
