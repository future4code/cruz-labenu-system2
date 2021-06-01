import express from 'express'
import cors from 'cors'
import {pingRoute} from './routes/ping'
import {classRoute} from './routes/class'
import {studentRoute} from './routes/student'
import {teacherRoute} from './routes/teacher'
import {errorHandler} from './utils/errorHandler'

export const app = express()

app.use(express.json())
app.use(cors())
app.use('/', express.static('public/app/build'))
app.use('/ping', pingRoute)
app.use('/class', classRoute)
app.use('/student', studentRoute)
app.use('/teacher', teacherRoute)
app.use(errorHandler)
