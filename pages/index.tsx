import { Layout, Meta } from 'components/layouts';
import { List } from 'components/lists';

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
