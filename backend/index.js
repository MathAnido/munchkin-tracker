require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

const resolvers = require('./resolvers');

const schemaPath = './schema/*.graphql';
const schema = loadSchemaSync(schemaPath, {
  loaders: [new GraphQLFileLoader()]
})
const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
