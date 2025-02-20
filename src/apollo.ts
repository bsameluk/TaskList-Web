import { InMemoryCache, ApolloClient, HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { createClient } from "graphql-ws";

// const httpLink = new HttpLink({
//   uri: "http://localhost:3000/graphql",
// });

// const wsLink = new GraphQLWsLink(createClient({
//   url: 'ws://localhost:3000/cable',
//   options: {
//     reconnect: true,
//   },
// }));

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return definition.kind === "OperationDefinition" && definition.operation === "subscription";
//   },
//   wsLink,
//   httpLink
// );

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: "no-cache" },
    query: { fetchPolicy: "no-cache" },
  },
});

export default client;
