import knex from 'knex'
import knexfile from '../../knexfile'

console.log(knexfile.development)

export const connection = knex(knexfile.development)
