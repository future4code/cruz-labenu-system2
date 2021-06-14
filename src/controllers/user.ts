import {RequestHandler} from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {v4 as uuid} from 'uuid'
import {MainRoute, Route} from '../@types/decorators'
import {Controller} from './base'
import {Services} from '../services/base'
import {Email, MailProvider} from '../services/email'
import {StudentServices} from '../services/student'
import {Password, PasswordService} from '../services/password'
import {Token, TokenService} from '../services/token'
import {ApiError} from '../utils/ApiError'
import {TeacherServices} from '../services/teacher'

@MainRoute('/user')
export class UserController implements Controller {
  services: Services
  student: Services
  teacher: Services

  mailProvider: MailProvider
  tokenManager: TokenService

  constructor() {
    // uns paranaues aqui que nao bate com o contratinho da interface so de brinks
    this.services = new StudentServices()
    this.student = this.services
    this.teacher = new TeacherServices()

    this.mailProvider = new Email()
    this.tokenManager = new Token()
  }

  @Route('post', '/signup')
  handle: RequestHandler = async (req, res) => {
    const {name, password, email} = req.body

    if (!name || !password || !email) {
      throw ApiError.badRequest(
        'Please informe name, password and email to signup'
      )
    }

    if (
      !Object.keys(req.body).every(key =>
        ['name', 'password', 'email'].includes(key)
      )
    ) {
      throw ApiError.badRequest(
        'Please inform only valid fields: name, email and password'
      )
    }

    const id = uuid()

    const passwordManager = new Password(password)
    const hash = await passwordManager.hash()

    const newUser = {
      id,
      name,
      email,
      password: hash,
      activedAcount: false
    }

    this.mailProvider.addEmailList({name, email})
    await this.mailProvider.send(
      'Active your account',
      'Please clink in the link to active your account'
    )

    res.send({user: newUser})
  }

  @Route('post', '/login')
  login: RequestHandler = async (req, res) => {
    const {name, password} = req.body
    res.send({message: 'no auth'})
  }
}
