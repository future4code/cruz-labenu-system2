import express from 'express'
import cors from 'cors'
import {pingRoute} from './routes/ping'
import {classRoute} from './routes/class'
import {studentRoute} from './routes/student'
import {teacherRoute} from './routes/teacher'
import {hobbieRoute} from './routes/hobbies'
import {skillsRoute} from './routes/skills'
import {errorHandler} from './utils/errorHandler'
import {notFound} from './routes/notFound'

export const app = express()
export const api = express()

app.use(express.json())
app.use(cors())
app.use('/', express.static('public/app/build'))
app.use('/api', api)
app.use(notFound)
app.use(errorHandler)

api.use('/', express.static('public/api'))
api.use('/ping', pingRoute)
api.use('/class', classRoute)
api.use('/student', studentRoute)
api.use('/teacher', teacherRoute)
api.use('/hobbies', hobbieRoute)
api.use('/skills', skillsRoute)
