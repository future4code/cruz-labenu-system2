import {Router} from 'express'
import {getAllStudents, createStudent} from '../database/student'
import {studentValidator} from '../utils/validator'
import {v4 as uuid} from 'uuid'
import {ApiError} from '../utils/ApiError'

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
    const newStudent = studentValidator(eq.body
)

    const keys = Object.keys(req.body)
    for (const key of keys) {
        if (req.body[key] === "")
            return res
                .status(400)
                .send({ message: "All information must be completed" })
    }

    await createResponsible(responsible);

    res
        .status(200)
        .send("Updated!")

} catch (error) {
    res
        .status(400)
        .send("Ops! Something is wrong. Try again later")
}
})

