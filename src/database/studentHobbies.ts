import { connection } from '.'

const studentHobbiesTable = () => connection('StudentHobbies')

export type StudentHobbies = {
    student_id: string
    hobbies_id: string
}

export const getAllStudentsHobbies = async () => {
    const allStudentsHobbies = await studentHobbiesTable()
    return allStudentsHobbies
}

export const createStudentHobbies = async (newStudentHobbies: StudentHobbies) => {
    const studentHobbies = studentHobbiesTable().insert(newStudentHobbies)
    return studentHobbies
}

export const updateStudentHobbies = async (
    student_id: string,
    studentHobbiesData: StudentHobbies
) => {
    studentHobbiesTable().update(studentHobbiesData).where({student_id})
}

export const deleteStudentHobbies = async (student_id: string) => {
    studentHobbiesTable().delete().where({ student_id })
}
