import { gql } from 'apollo-server'
import { typeDefs as flagTypes } from './flags/type';

export const typeDefs = gql`
  # Query, Mutation to be "extend" by specific type defs
  type Query
  type Mutation

  # Specific type defs
  ${flagTypes}
`;

export const resolvers = {
  Query: {},
  Mutation: {}
};