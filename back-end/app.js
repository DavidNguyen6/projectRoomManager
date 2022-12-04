const express = require('express');
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const mongoose = require('mongoose');

//Load db methods
const mogoDataMethods = require('./data/db');

//connect to Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kynhat:ky123456@cluster0.tqofnko.mongodb.net/?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
    });

    console.log("Mogongoose connect ");
  } catch( err) {
    console.log("err---", err);
    process.exit(1);
  }
}

connectDB();
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mogoDataMethods })
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  return apolloServer;
}

startServer();
const app = express();
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);