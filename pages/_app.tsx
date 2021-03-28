import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from 'store/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { server } from 'config';
import 'styles/globals.scss';

const client = new ApolloClient({
  uri: `${server}/api/pokemons`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
