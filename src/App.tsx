import { Outlet } from 'react-router-dom';

import { Header } from './components';

import './App.css';
import { useState } from 'react';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isMenuOpen && (
        <>
          <main className="page__body">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};
