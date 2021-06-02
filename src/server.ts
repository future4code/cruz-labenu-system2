import express from 'express'
import cors from 'cors'
import {pingRoute} from './routes/ping'
import {classRoute} from './routes/class'
import {studentRoute} from './routes/student'
import {teacherRoute} from './routes/teacher'
import {hobbieRoute} from './routes/hobbies'
import {skillsRoute} from './routes/skills'
import {errorHandler} from './utils/errorHandler'

export const app = express()

app.use(express.json())
app.use(cors())
app.use('/', express.static('public/app/build'))
app.use('/api', express.static('public/api'))
app.use('/ping', pingRoute)
app.use('/class', classRoute)
app.use('/student', studentRoute)
app.use('/teacher', teacherRoute)
app.use('/hobbies', hobbieRoute)
app.use('/skills', skillsRoute)
app.use(errorHandler)
