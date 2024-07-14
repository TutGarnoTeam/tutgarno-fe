import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import s from './TopMasters.module.scss';
import arrow from '../../assets/arrow-top-masters.svg';
import defaultAvatar from '../../assets/defaultAvatar.jpg';
import '../../styles/reset.scss';
import { SwiperPagination } from '../SwiperPagination/SwiperPagination.tsx';
import paginationStyle from '../SwiperPagination/SwiperPagination.module.scss';

interface ICategory {
  id: number;
  categoryName: string;
}

const category: ICategory[] = [
  {
    id: 0,
    categoryName: 'Всі',
  },
  {
    id: 1,
    categoryName: 'Перукарські послуги',
  },
  {
    id: 2,
    categoryName: 'Нігтьовий сервіс',
  },
  {
    id: 3,
    categoryName: 'Макіяж',
  },
  {
    id: 4,
    categoryName: 'Барбер послуги',
  },
  {
    id: 5,
    categoryName: 'Вії',
  },
  {
    id: 6,
    categoryName: 'Брови',
  },
];

const TopMasters: React.FC = () => {
  return (
    <section className={s.masters}>
      <h2 className={s.masters_title}>
        <span className={s.masters_title_wrapper}>Топ</span> майстри
      </h2>
      <p className={s.masters_text}>Улюблені майстри наших користувачів</p>
      <Swiper
        className={s.category_swiper}
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          prevEl: `.${s.category_swiper_slide_btn_left}`,
          nextEl: `.${s.category_swiper_slide_btn_right}`,
        }}
      >
        <button
          className={`${s.category_swiper_slide_btn} ${s.category_swiper_slide_btn_left}`}
        >
          <svg width={20} height={20}>
            <use href={`${arrow}#icon-arrow-left`}></use>
          </svg>
        </button>
        {category.map(el => (
          <SwiperSlide key={el.id} className={s.category_swiper_slide}>
            <p>{el.categoryName}</p>
          </SwiperSlide>
        ))}
        <button
          className={`${s.category_swiper_slide_btn} ${s.category_swiper_slide_btn_right}`}
        >
          <svg width={20} height={20}>
            <use href={`${arrow}#icon-arrow-right`}></use>
          </svg>
        </button>
      </Swiper>
      <Swiper
        className={s.masters_swiper}
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        pagination={{
          el: '.masters_pagination',
          clickable: true,
          bulletClass: `${paginationStyle.pagination_wrapper_bullet}`,
          bulletActiveClass: `${paginationStyle.pagination_wrapper_bullet_active}`,
        }}
        navigation={{
          prevEl: '.master_prev',
          nextEl: '.master_next',
          disabledClass: `${paginationStyle.pagination_btn_disabled}`,
        }}
      >
        <SwiperSlide className={s.masters_swiper_slide}>
          <div className={s.masters_swiper_img_wrap}>
            <img
              className={s.masters_swiper_img}
              src={defaultAvatar}
              alt="avatar"
            />
          </div>
          <div className={s.masters_swiper_text_wrap}>
            <h3 className={s.masters_swiper_text_wrap_title}>Ольга Луценко</h3>
            <ul className={s.masters_swiper_text_wrap_btn_list}>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  Стрижки
                </button>
              </li>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  Зачіски
                </button>
              </li>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  + ще 12
                </button>
              </li>
            </ul>
            <div style={{ height: '20px' }}>Рейтинг, відгуки</div>
            <p className={s.masters_swiper_text_wrap_text}>
              Київ
              <br />
              пр. Лесі Українки, 7Б
            </p>
            <button
              className={`
              ${s.masters_swiper_text_wrap_btn}
              ${s.masters_swiper_text_wrap_btn_about}`}
            >
              Про майстра
            </button>
            <button
              className={`
              ${s.masters_swiper_text_wrap_btn}
              ${s.masters_swiper_text_wrap_record}`}
            >
              Запис
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.masters_swiper_slide}>
          <div className={s.masters_swiper_img_wrap}>
            <img
              className={s.masters_swiper_img}
              src={defaultAvatar}
              alt="avatar"
            />
          </div>
          <div className={s.masters_swiper_text_wrap}>
            <h3 className={s.masters_swiper_text_wrap_title}>Ольга Луценко</h3>
            <ul className={s.masters_swiper_text_wrap_btn_list}>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  Стрижки
                </button>
              </li>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  Зачіски
                </button>
              </li>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  + ще 12
                </button>
              </li>
            </ul>
            <div style={{ height: '20px' }}>Рейтинг, відгуки</div>
            <p className={s.masters_swiper_text_wrap_text}>
              Київ
              <br />
              пр. Лесі Українки, 7Б
            </p>
            <button
              className={`
              ${s.masters_swiper_text_wrap_btn}
              ${s.masters_swiper_text_wrap_btn_about}`}
            >
              Про майстра
            </button>
            <button
              className={`
              ${s.masters_swiper_text_wrap_btn}
              ${s.masters_swiper_text_wrap_record}`}
            >
              Запис
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.masters_swiper_slide}>
          <div className={s.masters_swiper_img_wrap}>
            <img
              className={s.masters_swiper_img}
              src={defaultAvatar}
              alt="avatar"
            />
          </div>
          <div className={s.masters_swiper_text_wrap}>
            <h3 className={s.masters_swiper_text_wrap_title}>Ольга Луценко</h3>
            <ul className={s.masters_swiper_text_wrap_btn_list}>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  Стрижки
                </button>
              </li>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  Зачіски
                </button>
              </li>
              <li>
                <button className={s.masters_swiper_text_wrap_btn_list_btn}>
                  + ще 12
                </button>
              </li>
            </ul>
            <div style={{ height: '20px' }}>Рейтинг, відгуки</div>
            <p className={s.masters_swiper_text_wrap_text}>
              Київ
              <br />
              пр. Лесі Українки, 7Б
            </p>
            <button
              className={`
              ${s.masters_swiper_text_wrap_btn}
              ${s.masters_swiper_text_wrap_btn_about}`}
            >
              Про майстра
            </button>
            <button
              className={`
              ${s.masters_swiper_text_wrap_btn}
              ${s.masters_swiper_text_wrap_record}`}
            >
              Запис
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <SwiperPagination
        paginationWrap={'masters_pagination'}
        btnPrevCl={'master_prev'}
        btnNextCl={'master_next'}
      />
    </section>
  );
};

export default TopMasters;
