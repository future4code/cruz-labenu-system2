import {Router} from 'express'
import {
  createClass,
  deleteClass,
  getAllClass,
  getClassDetails,
  updateClass,
  getAllStudentsByClassNameOrId,
  getAllTeachersByClassNameOrId,
  searchClassByName,
  searchClassByModule,
  ClassSearchProps
} from '../database/class'
import {v4 as uuid} from 'uuid'
import Ajv, {JSONSchemaType} from 'ajv'
import {classValidator} from '../utils/validator'
import {ApiError} from '../utils/ApiError'
import {getFullHostName} from '../utils/requestProps'

export const classRoute = Router()

classRoute.get('/', async (req, res) => {
  const hasQueries = Object.keys(req.query).length
  const query = {...req.query}

  if (hasQueries) {
    const ajv = new Ajv({allErrors: true, allowUnionTypes: true})

    interface QueryProps {
      name?: string
      module?: string | number
      limit?: string | number
      offset?: string | number
    }

    const schema: JSONSchemaType<QueryProps> = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          nullable: true
        },
        module: {
          type: ['integer', 'string'],
          pattern: '^[0-7]$',
          nullable: true
        },
        limit: {
          type: 'string',
          nullable: true
        },
        offset: {
          type: 'string',
          nullable: true
        }
      },
      additionalProperties: false
    }

    const validate = ajv.compile(schema)

    if (!validate(query)) {
      console.log(validate.errors)
      let errors =
        validate?.errors &&
        validate.errors.map(
          erro => `${erro.instancePath} ${erro.keyword} ${erro.message}`
        )
      return res.send(errors)
    }

    if (query.name) {
      const classResults = await searchClassByName(query.name as string)
      return res.send(classResults)
    }
    if (query.module) {
      const classResults = await searchClassByModule(Number(query.module))
      return res.send(classResults)
    }
    let pagination: Partial<ClassSearchProps>

    const limit = Number(query.limit) || 0
    const offset = Number(query.offset) || 0

    const classWithPagination = await getAllClass({limit, offset})
    return res.send(classWithPagination)
  }

  const allClasses = await getAllClass()

  if (!allClasses || !allClasses.length) {
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
