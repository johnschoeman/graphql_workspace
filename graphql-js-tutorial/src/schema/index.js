const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    allLinks: [Link!]
  }

  type Mutation {
    createLink(url: String!, description: String!): Link
  }

  type Link {
    id: ID!
    url: String!
    description: String!
  }
`;


module.exports = makeExecutableSchema({typeDefs, resolvers});