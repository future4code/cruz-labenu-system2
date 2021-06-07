import {RequestHandler} from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {v4 as uuid} from 'uuid'
import {MainRoute, Route} from '../@types/decorators'
import {Controller} from './base'
import {Services} from '../services/base'

@MainRoute('/user')
export class UserController implements Controller {
  secretpw!: string
  services!: Services
  @Route('post', '/signup')
  handle: RequestHandler = async (req, res) => {
    if (!req.body) return res.send({message: 'no body', body: req.body})
    const {name = '', password = ''} = req.body
    // const id = uuid()
    const id = '123456'
    const hashPassword = await bcrypt.hash(password, 10)
    this.secretpw = hashPassword
    const token = jwt.sign({id, name, hashPassword}, 'bananinha', {
      expiresIn: '1h'
    })
    res.send({token, hashPassword})
  }

  @Route('post', '/login')
  login: RequestHandler = (req, res) => {
    const {name, password} = req.body
    if (req.headers.auth) {
      const token = req.headers.auth
      try {
        const tokenData = jwt.verify(token as string, 'bananinha')
        const passwordIsValid = bcrypt.compare(password, this.secretpw)
        res.send({passwordIsValid, password, hash: this.secretpw})
      } catch (e) {
        res.send({error: 'token expired'})
      }
    } else {
      res.send({message: 'no auth'})
    }
  }
}
