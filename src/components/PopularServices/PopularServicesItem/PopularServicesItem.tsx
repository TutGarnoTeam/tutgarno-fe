import React from 'react';

import servicesSprite from '../../../assets/svg/services-sprite.svg';
import s from './PopularServicesItem.module.scss';

interface IProps {
  nameIcon: string;
  title: string;
}

const PopularServicesItem: React.FC<IProps> = ({ nameIcon, title }) => {
  return (
    <div className={s.item}>
      <svg className={s.icon}>
        <use href={`${servicesSprite}#${nameIcon}`}></use>
      </svg>
      <h3 className={s.title}>{title}</h3>
    </div>
  );
};

export default PopularServicesItem;
