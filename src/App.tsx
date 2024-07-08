import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from './components';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isMenuOpen && (
        <>
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};
