import { Footer, Header } from './';
import Meta from '../Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="relative container mx-auto overflow-x-hidden">
        <Header title={'Pokédex'} />
        <div className="mb-24">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
