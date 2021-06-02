import express from 'express'
import cors from 'cors'
import {pingRoute} from './routes/ping'
import {classRoute} from './routes/class'
import {studentRoute} from './routes/student'
import {teacherRoute} from './routes/teacher'
import {hobbieRoute} from './routes/hobbies'
import {skillsRoute} from './routes/skills'
import {teacherSkillsRoute} from './routes/teacherSkills'
import {studentHobbiesRoute} from './routes/studentHobbies'
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
api.use(['/class', '/turma'], classRoute)
api.use(['/students', '/estudantes', '/alunos'], studentRoute)
api.use(['/teachers', '/professores', 'instrutores'], teacherRoute)
api.use(['/hobbies', '/passatempos', '/passa-tempos'], hobbieRoute)
api.use(['/skills', '/habilidades', '/especialidades'], skillsRoute)
api.use('/teacheSkills', teacherSkillsRoute)
api.use('/studentHobbies', studentHobbiesRoute)