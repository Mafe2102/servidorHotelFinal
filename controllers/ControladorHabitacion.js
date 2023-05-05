import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js"
export class ControladorHabitaciones{
    constructor(){

    }
    async registrandoHabitacion(peticion,respuesta){
        let datoshabitacion=peticion.body
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            if(datoshabitacion.precioNoche<100000 && datoshabitacion.cantidadMaxima<2){
                respuesta.status(400).json({
                    "mensaje":"El precio no puede ser menor a 100000 y la cantidad maxima de personas de personas ingresadas"                     
                })
            }else if (datoshabitacion.precioNoche<1000000){
                respuesta.status(400).json({
                    "mensaje":"El precio no puede ser menor a 1000000"                     
                })
            }else if (datoshabitacion.cantidadMaxima<2){
                respuesta.status(400).json({
                    "mensaje":"Muy poca gente en una habitacion"                     
                })
            }

            await servicioHabitacion.registrarHabitacion(datoshabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito agregando los datos"
            })     
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            }) 
        }
    }
    async buscandoUnaHabitacion(peticion,respuesta){
        let idhabitacion=peticion.params.idhabitacion
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            respuesta.status(200).json({
                "mensaje":"Exito buscando los datos"+idhabitacion,
                "habitacion":await servicioHabitacion.buscarHabitacion(idhabitacion)
            })     
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            }) 
        }
    }
    async buscandoTodasHabitacion(peticion,respuesta){
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            respuesta.status(200).json({
                "mensaje":"Exito buscando los datos",
                "habitaciones":await servicioHabitacion.buscarTodasHabitaciones()
            })     
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            }) 
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let idhabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        console.log(idhabitacion)
        console.log(datosHabitacion)
        let servicioHabitacion=new ServicioHabitaciones()
        try{
            await servicioHabitacion.editarHabitacion(idhabitacion,datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito editando los datos"
            })     
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            }) 
        }
    }
}
