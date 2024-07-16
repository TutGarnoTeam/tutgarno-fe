import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './components';
import Header from './components/Header/Header.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
