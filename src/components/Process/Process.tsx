import React from 'react';

import s from './Process.module.scss';
import { useNavigate } from 'react-router-dom';

const Process: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={s.wrap}>
      <div className={s.loader}></div>
      <h3 className={s.title}>Cторінка в процесі розробки</h3>
      <button onClick={handleClick} className={s.btn}>
        Додому
      </button>
    </div>
  );
};

export { Process };
