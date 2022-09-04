import {Schema, model} from 'mongoose'

const Tarea = new Schema({
    nombre: {
        type: String,
    },
    apodo: String
})


module.exports = model("Tarea", Tarea)
