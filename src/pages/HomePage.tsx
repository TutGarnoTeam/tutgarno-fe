import React from 'react';

import PopularServicesList from '../components/PopularServices/PopularServicesList.tsx';
import TopMasters from '../components/TopMasters/TopMasters.tsx';

const HomePage: React.FC = () => {
  return (
    <>
      <PopularServicesList />
      <TopMasters />
    </>
  );
};

export { HomePage };
