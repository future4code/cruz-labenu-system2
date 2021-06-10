import bcrypt from 'bcrypt'
import {config} from 'dotenv'
config()

export interface PasswordService {
  rounds: number
  hash: () => Promise<string>
  compare: (hash: string) => Promise<boolean>
}

export class Password implements PasswordService {
  rounds: number
  constructor(protected password: string) {
    this.rounds = Number(process.env.BCRYPT_ROUNDS) || 10
  }

  async hash() {
    const salt = await bcrypt.genSalt(this.rounds)
    console.log({salt})
    return bcrypt.hash(this.password, salt)
  }

  async compare(hash: string) {
    return bcrypt.compare(this.password, hash)
  }
}
