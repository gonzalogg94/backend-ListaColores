
 export const listarTareas=(req, res) => {
    res.send("Aqui tengo que retornar una lista de tareas");
  }


 export  const crearTarea = (req, res) => {
  // extraer del body los datos
console.log(req.body)
// agregar la validacion correspondiente 
// guardar ese producto en la bd 
    res.send("Esto es una prueba de la peticion post");
  }