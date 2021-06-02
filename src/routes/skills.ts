import {Router} from 'express'
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  updateSkill
} from '../database/skills'
import {hobbieAndSkillValidator} from '../utils/validator'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'

export const skillsRoute = Router()

skillsRoute.get('/', async (req, res) => {
  const allSkills = await getAllSkills()

  if (!allSkills.length) {
    res.send('No skills yet')
  } else {
    res.send(allSkills)
  }
})

skillsRoute.post('/', async (req, res) => {
  const checkSkill = hobbieAndSkillValidator(req.body)
  const id = uuid()

  const newSkill = {
    id,
    ...checkSkill
  }

  const skillCreated = await createSkill(newSkill)

  if (!skillCreated) throw ApiError.internal()

  res.status(201).send(newSkill)
})

skillsRoute.put('/:id', async (req, res) => {
  const {id} = req.params
  const checkSkill = hobbieAndSkillValidator(req.body)

  const skillUpdated = await updateSkill(id, checkSkill)

  if (!skillUpdated) {
    throw ApiError.badRequest('Cant found Skill')
  }
  res.send({message: 'updated!'})
})

skillsRoute.delete('/:id', async (req, res) => {
  const {id} = req.params

  const skillDeleted = await deleteSkill(id)

  if (!skillDeleted) {
    throw ApiError.badRequest('Cant found Skill')
  }

  res.send({message: 'deleted!'})
})
