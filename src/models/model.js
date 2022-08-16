import {Schema, model} from 'mongoose'

const Tarea = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String
})


module.exports = model("Tarea", Tarea)
