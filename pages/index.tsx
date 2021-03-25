import { Layout } from 'components/layouts';
import { List } from 'components/lists';
import Meta from 'components/Meta';
import styles from 'styles/Home.module.scss';

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

export default Home;
