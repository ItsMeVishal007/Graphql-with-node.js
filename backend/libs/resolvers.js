const { ApolloServer, gql } = require('apollo-server-express');
const users = require('./users')

const resolvers = {
  Query: {
    users: () => users,
  },
};

module.exports = resolvers;