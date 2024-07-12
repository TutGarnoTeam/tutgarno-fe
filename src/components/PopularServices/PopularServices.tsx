import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import { SwiperPagination } from '../SwiperPagination/SwiperPagination.tsx';
import paginationStyle from '../SwiperPagination/SwiperPagination.module.scss';
import s from './PopularServices.module.scss';

import defaultImgUrl from '../../assets/symbol-defs.svg';

interface IServicesDB {
  id: string;
  title: string;
  imgURL: string;
}

const popularServiceDB: IServicesDB[] = [
  {
    id: '1',
    title: 'Манікюр',
    imgURL: defaultImgUrl,
  },
  {
    id: '2',
    title: 'Фарбування волосся',
    imgURL: defaultImgUrl,
  },
  {
    id: '3',
    title: 'Стрижка вусів',
    imgURL: defaultImgUrl,
  },
  {
    id: '4',
    title: 'Процедури для брів',
    imgURL: defaultImgUrl,
  },
  {
    id: '5',
    title: 'Стрижки жіночі',
    imgURL: defaultImgUrl,
  },
];

const PopularServices: React.FC = () => {
  return (
    <div className={s.services}>
      <h2 className={s.services_title}>Популярні послуги</h2>
      <p className={s.services_text}>Улюблені послуги наших користувачів</p>
      <Swiper
        className={s.services_swiper}
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        pagination={{
          el: `.${paginationStyle.pagination_wrapper}`,
          clickable: true,
          bulletClass: `${paginationStyle.pagination_wrapper_bullet}`,
          bulletActiveClass: `${paginationStyle.pagination_wrapper_bullet_active}`,
        }}
        navigation={{
          prevEl: `.${paginationStyle.pagination_btn_prev}`,
          nextEl: `.${paginationStyle.pagination_btn_next}`,
          disabledClass: `${paginationStyle.pagination_btn_disabled}`,
        }}
      >
        {popularServiceDB.map(el => (
          <SwiperSlide key={el.id} className={s.services_swiper_slide}>
            <div className={s.services_swiper_slide_wrapper_icon}>
              <svg className="icon icon-image" width={62} height={62}>
                <use href={`${el.imgURL}#icon-image`}></use>
              </svg>
            </div>
            <h3 className={s.services_swiper_slide_title}>{el.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperPagination />
    </div>
  );
};

export default PopularServices;
