import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './NotFound.module.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={s.wrap}>
      <h3 className={s.title}>Cторінку не знайдено</h3>
      <button className={s.btn} onClick={handleClick}>
        Додому
      </button>
    </div>
  );
};

export { NotFound };
