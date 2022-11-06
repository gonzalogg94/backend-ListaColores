import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  color: {
    type: String,
    required: true,
    unique: true,
    minLengh: 2,
    maxLengh: 20,
  },
});

// aqui realizamos el modelo

const color = mongoose.model("color", colorSchema);
export default color;
