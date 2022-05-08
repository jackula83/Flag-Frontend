import { gql } from 'apollo-server'
import { typeDefs as flagTypes } from './flags/typedefs';

export const typeDefs = gql`
  # Base Query and Mutation to be extended by specific type defs
  type Query
  type Mutation

  # Specific type defs
  ${flagTypes}
`;

export const resolvers = {
  Query: {},
  Mutation: {}
};