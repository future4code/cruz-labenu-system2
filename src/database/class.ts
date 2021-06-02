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

export const getClassDetails = async (name: string) => {
  const [searchedClass] = await classTable().where({name})
  const [classStudentsCount] = await classTable()
    .count('* as students')
    .join('Student', 'Student.class_id', 'Class.id')
    .where('Class.name', name)

  const [classTeachersCount] = await classTable()
    .count('* as teachers')
    .join('Teacher', 'Teacher.class_id', 'Class.id')
    .where('Class.name', name)

  return {
    ...searchedClass,
    participants: {
      ...classStudentsCount,
      ...classTeachersCount
    }
  }
  return classStudentsCount
}

export const getAllStudentsByClassNameOrId = async (identifier: string) => {
  const allStudentsInClass = await classTable()
    .select('Student.id', 'Student.name', 'Student.email', 'Student.birthDate')
    .innerJoin('Student', 'Student.class_id', 'Class.id')
    .where('Class.id', identifier)
    .orWhere('Class.name', identifier)

  return allStudentsInClass
}

export const getAllTeachersByClassNameOrId = async (identifier: string) => {
  const allTeachersInClass = await classTable()
    .select('Teacher.id', 'Teacher.name', 'Teacher.email', 'Teacher.birthDate')
    .join('Teacher', 'Teacher.class_id', 'Class.id')
    .where('Class.id', identifier)
    .orWhere('Class.name', identifier)

  return allTeachersInClass
}
