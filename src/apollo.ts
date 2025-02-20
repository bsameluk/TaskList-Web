import { InMemoryCache, ApolloClient, HttpLink } from '@apollo/client';
import config from './config';

const client = new ApolloClient({
  link: new HttpLink({
    uri: config.GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: "no-cache" },
    query: { fetchPolicy: "no-cache" },
  },
});

export default client;
