import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../Icon/Icon.tsx';
import s from './BurgerMenu.module.scss';

const BurgerMenu: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickMenu = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <div>
      <ul
        className={`${s.fixed_header_list} ${
          isOpenModal && s.fixed_header_list_open
        }`}
      >
        <li>
          <Link to={'/services'}>Послуги</Link>
        </li>
        <li>
          <Link to={'/specialists'}>Майстри</Link>
        </li>
        <li>
          <Link to={'/about'}>Про нас</Link>
        </li>
        <li>
          <Link to={'/contacts'}>Контакти</Link>
        </li>
      </ul>
      <button onClick={handleClickMenu} className={s.fixed_header_btn}>
        <p>Головна</p>
        <Icon
          id={isOpenModal ? 'icon-close' : 'icon-menu'}
          style={s.fixed_header_icon}
        />
      </button>
    </div>
  );
};
export { BurgerMenu };
