import PopularServices from '../components/PopularServices/PopularServices.tsx';
import TopMasters from '../components/TopMasters/TopMasters.tsx';
import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <>
      <PopularServices />
      <TopMasters />
    </>
  );
};
