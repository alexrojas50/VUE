import express from 'express'
import { ApolloServer } from 'apollo-server-express/dist/ApolloServer'
import path from 'path'
import {typeDefs} from './graphql/schema'
import {resolvers} from './graphql/resolver'
import dbConnect from './mongo/mongo'

const app = express()

app.use(express.urlencoded())

// Envío el front
app.get('/', function (req, res) {
  res.send("xD")
})

app.use("/", require('./rutas/index') )



app.all('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
  }, function (req, res) {
    res.send('Hello from B!');
  });


  async function start() {

    const apolloServer = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers
  })
  
  await apolloServer.start()
  
  apolloServer.applyMiddleware({app:app})
  
  app.use("*", function (req, res) {
    res.send("Esto no existe") 
  })

  app.listen(process.env.PORT || 5000, function(err){
      if (err) console.log("Error in server setup")
      console.log("Server listening on Port", 5000);
  })

  }

start()
dbConnect()
