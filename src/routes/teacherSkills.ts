import { Router } from 'express'
import {
    getAllTeacherSkills,
    createTeacherSkills,
    updateTeacherSkills,
    deleteTeacherSkills
} from '../database/teacherSkills'
import { relationSkillValidator } from '../utils/validator'
import { ApiError } from '../utils/ApiError'

export const teacherSkillsRoute = Router()

teacherSkillsRoute.get('/', async (req, res) => {
    const allTeacherSkills = await getAllTeacherSkills()

    if (!allTeacherSkills.length) {
        res.send("Don't have registered teacher yet")
    } else {
        res.send(allTeacherSkills)
    }
})

teacherSkillsRoute.post('/', async (req, res) => {
    const teacherSkillCheck = relationSkillValidator(req.body)

    const newTeacherSkills = {
        ...teacherSkillCheck
    }

    const teacherSkillCreated = createTeacherSkills(newTeacherSkills)

    if (!teacherSkillCreated) throw ApiError.internal()

    res.status(201).send(newTeacherSkills)
})

teacherSkillsRoute.put('/:teacher_id', (req, res) => {
    const { teacher_id } = req.params
    const teacherSkillCheck = relationSkillValidator(req.body)

    const teacherSkillUpdate = updateTeacherSkills(teacher_id, teacherSkillCheck)

    if (!teacherSkillUpdate) {
        throw ApiError.badRequest('Cant found teacher')
    }

    res.send({ message: 'updated!' })
})

teacherSkillsRoute.delete('/:teacher_id', (req, res) => {
    const { teacher_id } = req.params

    const teacherDeleted = deleteTeacherSkills(teacher_id)

    if (!teacherDeleted) {
        throw ApiError.badRequest('Cant found teacher')
    }

    res.send({ message: 'deleted!' })
})
