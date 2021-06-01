import {Router} from 'express'
import {
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher
} from '../database/teacher'
import {userValidator} from '../utils/validator'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'

export const teacherRoute = Router()

teacherRoute.get('/', async (req, res) => {
  const allTeachers = await getAllTeachers()

  if (!allTeachers.length) {
    res.send("Don't have registered teachers yet")
  } else {
    res.send(allTeachers)
  }
})

teacherRoute.post('/', async (req, res) => {
  const teacherCheck = userValidator(req.body)
  const id = uuid()

  const newTeacher = {
    id,
    ...teacherCheck
  }

  const teacherCreated = createTeacher(newTeacher)

  if (!teacherCreated) throw ApiError.internal()

  res.status(201).send(newTeacher)
})

teacherRoute.put('/:id', (req, res) => {
  const {id} = req.params
  const teacherCheck = userValidator(req.body)

  const teacherUpdated = updateTeacher(id, teacherCheck)

  if (!teacherUpdated) {
    throw ApiError.badRequest('Cant found teacher')
  }

  res.send({message: 'updated!'})
})

teacherRoute.delete('/:id', (req, res) => {
  const {id} = req.params

  const teacherDeleted = deleteTeacher(id)

  if (!teacherDeleted) {
    throw ApiError.badRequest('Cant found teacher')
  }

  res.send({message: 'deleted!'})
})
