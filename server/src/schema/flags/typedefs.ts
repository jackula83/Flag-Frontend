import { entityTypeDef } from '../common/typedef';

enum SchemaType {
  Type,
  Input
}

const serveValueDefBody = () => `
  state: Boolean
`

const flagDefBody = (schemaType: SchemaType) => 
  `
    name: String
    description: String
    alias: String
    isEnabled: Boolean
    defaultServeValue: ${schemaType == SchemaType.Type ? 'ServeValue' : 'ServeValueInput'}
    ${entityTypeDef}
  `

export const typeDefs = `
  type ServeValue {
    ${serveValueDefBody()}
  }

  type Flag {
    ${flagDefBody(SchemaType.Type)}
  }

  input ServeValueInput {
    ${serveValueDefBody()}
  }

  input FlagSaveDataInput {
    ${flagDefBody(SchemaType.Input)}
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