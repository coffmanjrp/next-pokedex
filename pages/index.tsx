import { useQuery } from '@apollo/client';
import { pokemonQuery } from 'utils/queries';
import { Layout } from 'components/layouts';
import Meta from 'components/Meta';
import styles from 'styles/Home.module.scss';

const Home = () => {
  const { data, loading, error } = useQuery(pokemonQuery);

  if (!loading) {
    console.log(data);
  }

  return (
    <>
      <Layout>
        <Meta pageName={'Home'} />
      </Layout>
    </>
  );
};

export default Home;
