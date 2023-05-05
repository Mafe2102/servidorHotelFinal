//Listado de los servicios
import * as dotenv from 'dotenv'
dotenv.config()

import {API} from './API.js'

let servidor= new API()
// console.log(process.env.PORT)
//1. Despertar servidor
servidor.despertarServidor()
