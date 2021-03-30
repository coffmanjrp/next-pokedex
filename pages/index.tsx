import { Layout, Meta } from 'components/layouts';
import { List } from 'components/lists';
import { initializeApollo } from 'lib/apollo';
import { pokemonsListQuery } from 'utils/queries';

const Home = () => {
  return (
    <>
      <Layout>
        <Meta pageName={'Home'} />
        <List />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: pokemonsListQuery,
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
}

export default Home;
