import {ExpressServer} from './server'

const server = new ExpressServer(3100, 'Welcome to ur server!')
server.init()
server.listen()
