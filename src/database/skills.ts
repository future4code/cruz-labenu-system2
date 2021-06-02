import { connection } from '.'

const skillsTable = () => connection('Skills')
const teacherSkillsTable = () => connection('TeacherSkills')

export type Skills = {
    id: string
    name: string
}

export const getAllSkills = async () => skillsTable()

export const getSkillsDetails = async (name: string) => {
    const [searchedSkills] = await teacherSkillsTable()
        .select("Skills.name as Skills", "Teacher.name")
        .join('Skills', 'TeacherSkills.Skills_id', 'Skills.id')
        .join('Teacher', 'TeacherSkills.teacher_id', 'Teacher.id')
        .where('Skills.name', 'like', `%${name}%`)
    return searchedSkills
}

export const createSkill = async (newSkill: Skills) =>
    skillsTable().insert(newSkill)

export const updateSkill = async (id: string, skillData: Omit<Skills, 'id'>) =>
    skillsTable().update(skillData).where({ id })

export const deleteSkill = async (id: string) =>
    skillsTable().delete().where({ id })