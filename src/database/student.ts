import {connection} from '.'

const studentTable = () => connection('Student')

export type Student = {
  id: string
  name: string
  email: string
  birthDate: string
  class_id: string
}

export const getAllStudents = async () => {
  const allStudents = await studentTable()
  return allStudents
}

export const getStudentsByClassId = async (classId: string): Promise<any> => {
    const result = await connection
      .select("Student.id","Student.name", "Class.name")
      .from('Student')
      .where("Student.class_id", `${classId}`)
      .join('Class', 'Student.class_id', 'Class.id')
}

export const createStudent = async (newStudent: Student) => {
  const student = studentTable().insert(newStudent)
  return student
}

export const updateStudent = async (
  id: string,
  studentData: Omit<Student, 'id'>
) => {
  studentTable().update(studentData).where({id})
}

export const deleteStudent = async (id: string) => {
  studentTable().delete().where({id})
}
