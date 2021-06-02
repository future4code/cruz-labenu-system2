import { connection } from '.'

const teacherSkillsTable = () => connection('TeacherSkills')

export type TeacherSkills = {
    teacher_id: string
    skill_id: string
}

export const getAllTeacherSkills = async () => {
    const allteachersSkills = await teacherSkillsTable()
    return allteachersSkills
}

export const createTeacherSkills = async (newteacherSkills: TeacherSkills) => {
    const teacherSkills = teacherSkillsTable().insert(newteacherSkills)
    return teacherSkills
}

export const updateTeacherSkills = async (
    teacher_id: string,
    teacherSkillsData: TeacherSkills
) => {
    teacherSkillsTable().update(teacherSkillsData).where({teacher_id})
}

export const deleteTeacherSkills = async (teacher_id: string) => {
    teacherSkillsTable().delete().where({ teacher_id })
}
