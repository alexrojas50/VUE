import { gql } from 'apollo-server-express'


const typeDefs = gql`

type Task {
    id: ID
    nombre: String
    apodo: String
}

type Query {
    hello: String
    getAllTask: [Task]
    captcha: Boolean
}

type Mutation {
    createTask(nombre: String, apodo: String): Task
}
`

module.exports = {typeDefs}