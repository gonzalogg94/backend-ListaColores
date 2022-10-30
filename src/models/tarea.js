import mongoose,{Schema} from "mongoose";

const tareaSchema= new Schema({
    tarea:{
        type:String,
        required:true,
        unique:true,
        minLengh:2,
        maxLengh:20
    }
})


// aqui realizamos el modelo

const Tarea=mongoose.model("tarea",tareaSchema);
export default Tarea;