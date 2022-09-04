import Tarea from '../models/model'
import { ValidateCaptcha } from '../utils/captcha'

const resolvers = {

    Query: {
        hello: () => 'Hello World',
        getAllTask: async () => {
            const task = await Tarea.find()
            return task
        },
        captcha: async () => {
            try {
              const captcha = await ValidateCaptcha()
                if (!captcha) throw "captcha invalido"
                return captcha
              
              
            } catch(error) {
                console.log("FALLÓ----")
                console.error(error)
            }
        }
         
        
    },

    Mutation: {
        createTask: async (_, data) => {
            const {nombre, apodo} = data
            const newTask = new Tarea({nombre, apodo})
            await newTask.save()
            return newTask

        }
    }

}

module.exports = {resolvers}