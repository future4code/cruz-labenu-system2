import {Router} from 'express'
import {
  createHobbies,
  deleteHobbies,
  getAllHobbies,
  updateHobbies,
  getHobbiesDetails
} from '../database/hobbies'
import {hobbiesAndSkillValidator} from '../utils/validator'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'

export const hobbiesRoute = Router()

hobbiesRoute.get('/', async (req, res) => {
  const allHobbies = await getAllHobbies()

  if (!allHobbies.length) {
    res.send('No hobbies yet')
  } else {
    res.send(allHobbies)
  }
})

hobbiesRoute.get('/:name', async (req, res) => {
  const {name} = req.params

  const studentsHobbies = await getHobbiesDetails(name)

  if(!studentsHobbies){
    res.send({message: "No students practice this hobby yet"})
  }
  res.send(studentsHobbies)

  
})

hobbiesRoute.post('/', async (req, res) => {
  const checkHobbies = hobbiesAndSkillValidator(req.body)
  const id = uuid()

  const newHobbies = {
    id,
    ...checkHobbies
  }

  const hobbiesCreated = await createHobbies(newHobbies)

  if (!hobbiesCreated) throw ApiError.internal()

  res.status(201).send(newHobbies)
})

hobbiesRoute.put('/:id', async (req, res) => {
  const {id} = req.params
  const checkHobbies = hobbiesAndSkillValidator(req.body)

  const hobbiesUpdated = await updateHobbies(id, checkHobbies)

  if (!hobbiesUpdated) {
    throw ApiError.badRequest('Cant found Hobbies')
  }
  res.send({message: 'updated!'})
})

hobbiesRoute.delete('/:id', async (req, res) => {
  const {id} = req.params

  const hobbiesDeleted = await deleteHobbies(id)

  if (!hobbiesDeleted) {
    throw ApiError.badRequest('Cant found Hobbies')
  }

  res.send({message: 'deleted!'})
})
