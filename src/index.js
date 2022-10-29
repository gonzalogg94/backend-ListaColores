import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database"
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
app.get("/tareas", (req, res) => {
  res.send("Aqui tengo que retornar una lista de tareas");
});
app.post("/tareas", (req, res) => {
  res.send("retornar un objeto");
});
app.get("/tareas2", (req, res) => {
  res.send("Aqui devolvemos una tarea");
});
