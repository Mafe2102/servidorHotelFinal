import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//construimos el esquema de datos
//personalizando la informacion

const Reserva=new Schema({
    idHabitacion:{
        type:String,
        required:true
    },
    nombreCliente: {
        type:String,
        required:true
    },
    ApellidoCliente:{
        type: String,
        required:true
    },
    telefonoCliente:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFinal:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    costo:{
        type:Number,
        required:false
    }


})
export const modeloReserva=mongoose.model('reserva',Reserva)
