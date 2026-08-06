import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
  }

  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts: () => [
      {
        id: "1",
        title: "First Post",
        content: "This is the first post.",
        author: "Alice",
        createdAt: "2026-08-06",
      },
      {
        id: "2",
        title: "Second Post",
        content: "This is the second post.",
        author: "Bob",
        createdAt: "2026-08-06",
      },
      {
        id: "3",
        title: "Third Post",
        content: "This is the third post.",
        author: "Charlie",
        createdAt: "2026-08-06",
      },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: "/api/graphql" });
