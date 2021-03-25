import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { server } from 'config';
import 'styles/globals.scss';

const client = new ApolloClient({
  uri: `${server}/api/pokemons`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
