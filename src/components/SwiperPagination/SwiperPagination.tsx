import React from 'react';

import arrow from '../../assets/arrows.svg';
import s from './SwiperPagination.module.scss';

const SwiperPagination: React.FC = () => {
  return (
    <div className={s.pagination}>
      <button className={s.pagination_btn_prev}>
        <svg className={s.pagination_icon} width={12} height={12}>
          <use href={`${arrow}#icon-angle-left`}></use>
        </svg>
      </button>
      <div className={s.pagination_wrapper}></div>
      <button className={s.pagination_btn_next}>
        <svg className={s.pagination_icon} width={12} height={12}>
          <use href={`${arrow}#icon-angle-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export { SwiperPagination };
