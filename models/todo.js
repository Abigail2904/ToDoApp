//Importacion
const mongoose = require("mongoose");

//Definicion de cómo se verá cada tarea
const todoSchema = new mongoose.Schema({
 text: String,
 checked: Boolean,
 user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
 }
 
});

//Transformacion del objeto para la respuesta JSON
todoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
   
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;