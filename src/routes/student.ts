import { Router } from 'express'
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent
} from '../database/student'
import { userValidator } from '../utils/validator'
import { v4 as uuid } from 'uuid'
import { ApiError } from '../utils/ApiError'

export const studentRoute = Router()

studentRoute.get('/', async (req, res) => {
  const allStudents = await getAllStudents()

  if (!allStudents.length) {
    res.send("Don't have registered students yet")
  } else {
    res.send(allStudents)
  }
})

  studentRoute.post('/', async (req, res) => {
  const studentCheck = userValidator(req.body)
  const id = uuid()

  const newStudent = {
    id,
    ...studentCheck
  }

  const studentCreated = createStudent(newStudent)

  if (!studentCreated) throw ApiError.internal()

  res.status(201).send(newStudent)
})

  studentRoute.put('/:id', (req, res) => {
  const { id } = req.params
  const studentCheck = userValidator(req.body)

  const studentUpdate = updateStudent(id, studentCheck)

  if (!studentUpdate) {
    throw ApiError.badRequest('Cant found student')
  }

  res.send({ message: 'updated!' })
})

  studentRoute.delete('/:id', (req, res) => {
  const { id } = req.params

  const studentDeleted = deleteStudent(id)

  if (!studentDeleted) {
    throw ApiError.badRequest('Cant found student')
  }

  res.send({ message: 'deleted!' })
})
