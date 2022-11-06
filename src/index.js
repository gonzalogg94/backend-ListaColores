import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import tareasRouter from "./routes/tareas.routes";
import "./database"



// declaramos el puertop
const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// middlewares son funciones que se ejecutan antes de las rutas.
app.use(morgan("dev"));
// permitir peticiones remotas
app.use(cors());
// middlewares para interpretar peticiones remotas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cargar un archivo estatico
app.use(express.static(path.join(__dirname, "../public")));


// rutas :nombre de dominio +-----
app.use("/apicolores",tareasRouter)
