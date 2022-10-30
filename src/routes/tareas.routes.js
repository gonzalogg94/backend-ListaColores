import { Router } from "express";
import { crearTarea, listarTareas } from "../controllers/tareas.controllers";

const router = Router();

router.route("/tareas")
.get(listarTareas)
.post(crearTarea)




 export default router         

// app.get("/tareas", (req, res) => {
//     res.send("Aqui tengo que retornar una lista de tareas");
//   });
//   app.post("/tareas", (req, res) => {
//     res.send("retornar un objeto");
//   });
//   app.get("/tareas2", (req, res) => {
//     res.send("Aqui devolvemos una tarea");
//   });