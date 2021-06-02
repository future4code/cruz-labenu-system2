import { connection } from '.'

const skillsTable = () => connection('Skills')

export type Skills = {
    id: string
    name: string
}

export const getAllSkills = async () => skillsTable()

export const createSkill = async (newSkill: Skills) =>
    skillsTable().insert(newSkill)

export const updateSkill = async (id: string, skillData: Omit<Skills, 'id'>) =>
    skillsTable().update(skillData).where({ id })

export const deleteSkill = async (id: string) =>
    skillsTable().delete().where({ id })