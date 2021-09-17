const { ApolloServer } = require("apollo-server");
const { animals, mainCards, categories } = require("./db");
const typeDefs = require('./Schema');
const  Query = require("./resolvers/Query");
const Animal = require('./resolvers/Animal');
const Category = require('./resolvers/Category');
const Mutation = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
    Mutation,
  },
  context: {
    animals,
    mainCards,
    categories,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

