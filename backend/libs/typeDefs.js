const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query { users: [User]}
  type User {name : String ,lastName : String , dob : String , email : String}
`;

module.exports = typeDefs;