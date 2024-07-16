import React from 'react';

import sprite from '../../../assets/svg/sprite.svg'

interface IProps {
  id: string;
  style?: string;
}

const Icon: React.FC<IProps> = ({id, style}) => {
  return (
    <svg className={style}>
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};

export {Icon};
