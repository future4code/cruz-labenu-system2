import {config} from 'dotenv'
config()

export default {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_SCHEMA,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      multiStatements: true
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }
}
