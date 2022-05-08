import { gql } from 'apollo-server';
import { entityTypeDef } from '../common/type';

export const typeDefs = gql`

  type ServeValue {
    state: Boolean
  }

  type Flag {
    name: String
    description: String
    alias: String
    isEnabled: Boolean
    defaultServeValue: ServeValue
  }

  extend type Flag {
    ${entityTypeDef}
  }

  input FlagSaveDataInput {
    flag: Flag
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