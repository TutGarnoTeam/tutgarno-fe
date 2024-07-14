import React from 'react';

import arrow from '../../assets/arrows.svg';
import s from './SwiperPagination.module.scss';

interface IProps {
  btnPrevCl: string;
  btnNextCl: string;
  paginationWrap: string;
}

const SwiperPagination: React.FC<IProps> = ({
  paginationWrap,
  btnNextCl,
  btnPrevCl,
}) => {
  return (
    <div className={s.pagination}>
      <button className={`${s.pagination_btn_prev} ${btnPrevCl}`}>
        <svg className={s.pagination_icon} width={12} height={12}>
          <use href={`${arrow}#icon-angle-left`}></use>
        </svg>
      </button>
      <div className={`${s.pagination_wrapper} ${paginationWrap}`}></div>
      <button className={`${s.pagination_btn_next} ${btnNextCl}`}>
        <svg className={s.pagination_icon} width={12} height={12}>
          <use href={`${arrow}#icon-angle-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export { SwiperPagination };
