import { Footer, Header } from './';
import Meta from '../Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="relative container mx-auto overflow-x-hidden h-screen">
        <Header title={'Pokédex'} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
