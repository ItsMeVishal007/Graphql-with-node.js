const { ApolloServer, gql } = require('apollo-server-express');

const resolvers = {
  Query: {
    name: () => 'Vishal kumar',
  },
};

module.exports = resolvers;