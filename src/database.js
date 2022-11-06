import mongoose from "mongoose";

const url = "mongodb://localhost:27017/lista-colores";

mongoose.connect(url);

const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("Base de datos conectada")
})