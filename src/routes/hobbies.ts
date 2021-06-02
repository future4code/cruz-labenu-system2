import {Router} from 'express'
import {
  createHobbie,
  deleteHobbie,
  getAllHobbies,
  updateHobbie
} from '../database/hobbies'
import {hobbieAndSkillValidator} from '../utils/validator'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'

export const hobbieRoute = Router()

hobbieRoute.get('/', async (req, res) => {
  const allHobbies = await getAllHobbies()

  if (!allHobbies.length) {
    res.send('No hobbies yet')
  } else {
    res.send(allHobbies)
  }
})

hobbieRoute.post('/', async (req, res) => {
  const checkHobbie = hobbieAndSkillValidator(req.body)
  const id = uuid()

  const newHobbie = {
    id,
    ...checkHobbie
  }

  const hobbieCreated = await createHobbie(newHobbie)

  if (!hobbieCreated) throw ApiError.internal()

  res.status(201).send(newHobbie)
})

hobbieRoute.put('/:id', async (req, res) => {
  const {id} = req.params
  const checkHobbie = hobbieAndSkillValidator(req.body)

  const hobbieUpdated = await updateHobbie(id, checkHobbie)

  if (!hobbieUpdated) {
    throw ApiError.badRequest('Cant found Hobbie')
  }
  res.send({message: 'updated!'})
})

hobbieRoute.delete('/:id', async (req, res) => {
  const {id} = req.params

  const hobbieDeleted = await deleteHobbie(id)

  if (!hobbieDeleted) {
    throw ApiError.badRequest('Cant found Hobbie')
  }

  res.send({message: 'deleted!'})
})
