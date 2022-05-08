import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';

require('./startup/logging')();
require('./startup/env')();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});