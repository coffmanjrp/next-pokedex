import { ApolloClient, InMemoryCache } from '@apollo/client';
import { server } from 'config';

function createApolloClient() {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: `${server}/api/graphql`,
    cache: new InMemoryCache(),
  });

  return client;
}

export default createApolloClient;
