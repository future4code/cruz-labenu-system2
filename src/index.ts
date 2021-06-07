import {ExpressServer} from './server'
import colors from 'colors'
colors.enable()

const server = new ExpressServer(3100, 'Welcome to ur server!')
server.init()
server.listen()
