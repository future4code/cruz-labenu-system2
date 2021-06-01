import knex from 'knex'
import knexfile from '../../knexfile'
import {config} from 'dotenv'
config()

export const connection = knex(knexfile.development)
