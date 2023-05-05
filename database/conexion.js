import mongoose from 'mongoose'
export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("Conexion exitosa")
    }catch(error){
        console.log("Conexion fallo"+error)
    }
}