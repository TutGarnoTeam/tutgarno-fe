import React from 'react';

import PopularServices from '../components/PopularServices/PopularServices.tsx';
import TopMasters from '../components/TopMasters/TopMasters.tsx';

const HomePage: React.FC = () => {
  return (
    <>
      <PopularServices/>
      <TopMasters/>
    </>
  );
};

export {HomePage}
