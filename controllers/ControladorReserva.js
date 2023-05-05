import { ServicioReservas } from "../services/ServicioReservas.js";
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js";
export class ControladorReservas {
  constructor() {}
  async crearReserva(peticion, respuesta) {
   
    let datosReserva = peticion.body;
    let servicioReservas = new ServicioReservas();
    let servicioHabitaciones = new ServicioHabitaciones();
    try {
      let habitacion = await servicioHabitaciones.buscarHabitacion(
        datosReserva.idHabitacion
      );
      // console.log(habitacion)
      if (habitacion) {
        let fechaInicio = new Date(datosReserva.fechaInicio).getTime();
        let fechaFinal = new Date(datosReserva.fechaFinal).getTime();
        let diferencia = fechaFinal - fechaInicio;
        let diasReservados = diferencia / (1000 * 60 * 60 * 24);
        console.log(habitacion.precioNoche)
        console.log(diasReservados)
        let costo = habitacion.precioNoche * diasReservados;

        if (diferencia < 0) {
          //valido fecha
          respuesta.status(400).json({
            mensaje: "las fechas son invalidas",
          });
        } else {
          datosReserva.costo = costo;
          await servicioReservas.registrarReserva(datosReserva);
          respuesta.status(200).json({
            mensaje: "exito agregando la reserva",
          });
        }
      } else {
        respuesta.status(400).json({
          mensaje: "No existe la habitacion",
        });
      }
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Fallamos " + errorPeticion,
      });
    }
  }
  //buscarUnaReserva(peticion,respuesta){
  async buscarUnaReserva(peticion, respuesta) {
    let idReserva = peticion.params.idReserva;
    let servicioReservas = new ServicioReservas();
    try {
      respuesta.status(200).json({
        mensaje: "Exito buscando la reserva" + idReserva,
        reserva: await servicioReservas.buscarReserva(idReserva),
      });
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Fallamos " + errorPeticion,
      });
    }
  }
  async buscarReservas(peticion, respuesta) {
    let servicioReservas = new ServicioReservas();
    try {
      respuesta.status(200).json({
        mensaje: "Exito buscando todas las reservas",
        reservas: await servicioReservas.buscarTodasReservas(),
      });
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Fallamos " + errorPeticion,
      });
    }
  }
  async editarReserva(peticion, respuesta) {
    let idReserva = peticion.params.idReserva;
    let datosReserva = peticion.body;
    let servicioReservas = new ServicioReservas();
    try {
      await servicioReservas.editarReserva(idReserva, datosReserva);
      respuesta.status(200).json({
        mensaje: "Exito editando la reserva",
      });
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Fallamos " + errorPeticion,
      });
    }
  }
  async eliminarReservas(peticion, respuesta) {
    let idReserva = peticion.params.idReserva;
    let servicioReservas = new ServicioReservas();
    try {
      await servicioReservas.eliminarReserva(idReserva);
      respuesta.status(200).json({
        mensaje: "Reserva eliminada",
      });
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Fallamos " + errorPeticion,
      });
    }
  }
}
