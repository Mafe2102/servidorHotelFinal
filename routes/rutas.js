import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitacion.js'
import {ControladorReservas} from '../controllers/ControladorReserva.js'
//parav separar las rutas de la logica de negocio
//utilizare un metodo especial express
let controladorHabitaciones = new ControladorHabitaciones()
let controladorReservas = new ControladorReservas()
export let rutas=express.Router()

rutas.post('/registrarhabitacion',controladorHabitaciones.registrandoHabitacion)
rutas.get('/buscarhabitaciones',controladorHabitaciones.buscandoTodasHabitacion)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitaciones.buscandoUnaHabitacion)
rutas.put('/actualizarhabitacion/:idhabitacion',controladorHabitaciones.editandoHabitacion)

rutas.post('/crearreserva',controladorReservas.crearReserva)
rutas.get('/buscarunareserva/:idReserva',controladorReservas.buscarUnaReserva)
rutas.get('/buscarreservas',controladorReservas.buscarReservas)
rutas.put('/editarreserva/:idReserva',controladorReservas.editarReserva)
rutas.delete('/eliminarreservas/:idReserva',controladorReservas.eliminarReservas)