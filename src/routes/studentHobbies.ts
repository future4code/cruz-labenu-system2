import { Router } from 'express'
import {
    getAllStudentsHobbies,
    createStudentHobbies,
    updateStudentHobbies,
    deleteStudentHobbies
} from '../database/studentHobbies'
import { relationHobbieValidator } from '../utils/validator'
import { ApiError } from '../utils/ApiError'

export const studentHobbiesRoute = Router()

studentHobbiesRoute.get('/', async (req, res) => {
    const allStudentsHobbies = await getAllStudentsHobbies()

    if (!allStudentsHobbies.length) {
        res.send("Don't have registered students yet")
    } else {
        res.send(allStudentsHobbies)
    }
})

studentHobbiesRoute.post('/', async (req, res) => {
    const studentHobbieCheck = relationHobbieValidator(req.body)

    const newStudentHobbies = {
        ...studentHobbieCheck
    }

    const studentHobbieCreated = createStudentHobbies(newStudentHobbies)

    if (!studentHobbieCreated) throw ApiError.internal()

    res.status(201).send(newStudentHobbies)
})

studentHobbiesRoute.put('/:student_id', (req, res) => {
    const { student_id } = req.params
    const studentHobbieCheck = relationHobbieValidator(req.body)

    const studentHobbieUpdate = updateStudentHobbies(student_id, studentHobbieCheck)

    if (!studentHobbieUpdate) {
        throw ApiError.badRequest('Cant found student')
    }

    res.send({ message: 'updated!' })
})

studentHobbiesRoute.delete('/:student_id', (req, res) => {
    const { student_id } = req.params

    const studentDeleted = deleteStudentHobbies(student_id)

    if (!studentDeleted) {
        throw ApiError.badRequest('Cant found student')
    }

    res.send({ message: 'deleted!' })
})
