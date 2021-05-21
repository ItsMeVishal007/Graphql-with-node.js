const { ApolloServer, gql } = require('apollo-server-express');
 
const typeDefs = gql`
  type Query {
    name: String
  }
`;

module.exports = typeDefs;