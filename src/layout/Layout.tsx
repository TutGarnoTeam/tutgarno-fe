import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../components';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { Layout };
