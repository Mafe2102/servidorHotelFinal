import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//construimos el esquema de datos
//personalizando la informacion

const Habitacion=new Schema({

    nombre: {
        type:String,
        required:true
    },
    foto:{
        type: [String],
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precioNoche:{
        type:Number,
        required:true
    },
    cantidadMaxima:{
        type:Number,
        required:true
    },

})
export const modeloHabitacion=mongoose.model('habitacion',Habitacion)
