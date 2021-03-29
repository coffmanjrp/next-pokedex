import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { server } from 'config';

const client = new ApolloClient({
  uri: `${server}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
