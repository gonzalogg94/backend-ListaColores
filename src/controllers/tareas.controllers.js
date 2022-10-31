import Tarea from "../models/tarea";
export const listarTareas = async (req, res) => {
  try {
    // guardar ese producto en la bd
    const listaTareas = await Tarea.find();
    // rersponder al usuario que todo salio bien
    res.status(200).json(listaTareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar buscar las tareas",
    });
  }
};

export const crearTarea = async (req, res) => {
  // extraer del body los datos
  console.log(req.body);
  // agregar la validacion correspondiente
  try {
    console.log(req.body);
    const tareaNueva = new Tarea(req.body);
    // guardar ese producto en la bd
    await tareaNueva.save();
    // rersponder al usuario que todo salio bien
    res.status(201).json({
      mensaje: "El producto fue correctamente creado",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};




export const  obtenerTarea= async (req,res)=>{
try{
console.log(req.params.id)
const tareaBuscada= await Tarea.findById(req.params.id)
res.status(200).json(tareaBuscada);
}catch(error){
console.log(error)
res.status(404).json({
  mensaje:"Error no se pudo encontrar el producto solicitado"
})
}
}
