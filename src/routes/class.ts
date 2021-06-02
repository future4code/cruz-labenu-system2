import {Router} from 'express'
import {
  createClass,
  deleteClass,
  getAllClass,
  getClassDetails,
  updateClass
} from '../database/class'
import {classValidator} from '../utils/validator'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'
import {
  getAllStudentsByClassNameOrId,
  getAllTeachersByClassNameOrId
} from '../database/class'
import {getFullHostName} from '../utils/requestProps'

export const classRoute = Router()

classRoute.get('/', async (req, res) => {
  const allClasses = await getAllClass()

  if (!allClasses.length) {
    res.send('No classes yet')
  } else {
    res.send(allClasses)
  }
})

classRoute.post('/', async (req, res) => {
  const clearClass = classValidator(req.body)
  const id = uuid()

  const newClass = {
    id,
    ...clearClass
  }

  const classCreated = await createClass(newClass)

  if (!classCreated) throw ApiError.internal()

  res.status(201).send(newClass)
})

classRoute.put('/:id', async (req, res) => {
  const {id} = req.params
  const clearClass = classValidator(req.body)

  const classUpdated = await updateClass(id, clearClass)

  if (!classUpdated) {
    throw ApiError.badRequest('Cant found class')
  }
  console.log(classUpdated)

  res.send({message: 'updated!'})
})

classRoute.delete('/:id', async (req, res) => {
  const {id} = req.params

  const classDeleted = await deleteClass(id)

  if (!classDeleted) {
    throw ApiError.badRequest('Cant found class')
  }

  res.send({message: 'deleted!'})
})

classRoute.get('/:name', async (req, res) => {
  const {name} = req.params

  const studentsInClass = await getClassDetails(name)

  res.send(studentsInClass)
})

classRoute.get('/:name/students', async (req, res) => {
  const {name} = req.params

  const studentsInClass = await getAllStudentsByClassNameOrId(name)

  const studentEndPoint = getFullHostName(req) + '/student'

  const studentsInClassWithLink = studentsInClass.map(student => ({
    ...student,
    link: `${studentEndPoint}/${student.id}`
  }))

  res.send(studentsInClassWithLink)
})

classRoute.get('/:name/teachers', async (req, res) => {
  const {name} = req.params

  const studentsInClass = await getAllTeachersByClassNameOrId(name)

  res.send(studentsInClass)
})
