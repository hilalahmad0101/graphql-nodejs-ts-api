import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// 1. The Schema (Type Definitions)
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// 2. The Resolvers
const books = [
    { title: 'The Awakening', author: 'Kate Chopin' },
    { title: 'City of Glass', author: 'Paul Auster' },
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})

console.log(`🚀  Server ready at: ${url}`)