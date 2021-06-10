import {config} from 'dotenv'
import jwt from 'jsonwebtoken'
config()

type Payload = Record<string, any>

export interface TokenService {
  key: string
  generate: (payload: Payload) => string
  verify: (token: string) => string | object
}

export class Token implements TokenService {
  key: string

  constructor() {
    this.key = process.env.JWT_KEY as string
  }

  generate(payload: Payload) {
    return jwt.sign(payload, this.key, {expiresIn: '1h'})
  }

  verify(token: string) {
    return jwt.verify(token, this.key)
  }
}
