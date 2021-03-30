import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from 'store/store';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apollo';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
