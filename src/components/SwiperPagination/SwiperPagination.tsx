import React from 'react';

import {Icon} from "../UI";
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
        <Icon id={'icon-arrow-left-1'} style={s.pagination_icon}/>
      </button>
      <div className={`${s.pagination_wrapper} ${paginationWrap}`}></div>
      <button className={`${s.pagination_btn_next} ${btnNextCl}`}>
        <Icon id={'icon-arrow-right-1'} style={s.pagination_icon}/>
      </button>
    </div>
  );
};

export {SwiperPagination};
