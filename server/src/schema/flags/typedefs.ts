import { gql } from 'apollo-server';
import { entityTypeDef } from '../common/typedef';

const flagTypeDefs = `
    name: String
    description: String
    alias: String
    isEnabled: Boolean
    defaultServeValue: ServeValue
    ${entityTypeDef}
  `

export const typeDefs = `
  type ServeValue {
    state: Boolean
  }

  type Flag {
    ${flagTypeDefs}
  }

  input FlagSaveDataInput {
    ${flagTypeDefs}
  }

  extend type Query {
    flag: Flag
    flags: [Flag]!
  }

  extend type Mutation {
    flagSave(data: FlagSaveDataInput!): Flag
    flagDelete(id: Int!): Flag
  }
`;