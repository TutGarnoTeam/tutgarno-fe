import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Rating } from 'react-simple-star-rating';
import 'swiper/css';

import { SwiperPagination } from '../UI/SwiperPagination/SwiperPagination.tsx';
import paginationStyle from '../UI/SwiperPagination/SwiperPagination.module.scss';
import s from './TopMasters.module.scss';

import arrow from '../../assets/arrow-top-masters.svg';
import masterDef from '../../assets/master_def.png';

interface ICategory {
  id: number;
  categoryName: string;
}

interface IMaster {
  id: number;
  name: string;
  services: ICategory[];
  rating: number;
  comments: number;
  address: {
    city: string;
    street: string;
  };
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

const mastersArr: IMaster[] = [
  {
    id: 1,
    name: 'Ольга Луценко',
    services: [
      {
        id: 1,
        categoryName: 'Стрижки',
      },
      {
        id: 2,
        categoryName: 'Зачіски',
      },
      {
        id: 3,
        categoryName: 'Візаж',
      },
      {
        id: 4,
        categoryName: 'Макіяж',
      },
      {
        id: 5,
        categoryName: 'Манікюр',
      },
      {
        id: 6,
        categoryName: 'Педикюр',
      },
      {
        id: 7,
        categoryName: 'Масаж',
      },
    ],
    rating: 4.0,
    comments: 10,
    address: {
      city: 'Київ',
      street: 'пр. Лесі Українки, 7Б',
    },
  },
  {
    id: 2,
    name: 'Марина Онищенко',
    services: [
      {
        id: 1,
        categoryName: 'Стрижки',
      },
      {
        id: 2,
        categoryName: 'Зачіски',
      },
      {
        id: 3,
        categoryName: 'Візаж',
      },
      {
        id: 4,
        categoryName: 'Макіяж',
      },
      {
        id: 5,
        categoryName: 'Манікюр',
      },
      {
        id: 6,
        categoryName: 'Педикюр',
      },
      {
        id: 7,
        categoryName: 'Масаж',
      },
    ],
    rating: 5,
    comments: 110,
    address: {
      city: 'Запоріжжя',
      street: 'вул. Короленко, 52',
    },
  },
  {
    id: 3,
    name: 'Оксана Іванова',
    services: [
      {
        id: 1,
        categoryName: 'Стрижки',
      },
      {
        id: 2,
        categoryName: 'Зачіски',
      },
      {
        id: 3,
        categoryName: 'Візаж',
      },
      {
        id: 4,
        categoryName: 'Макіяж',
      },
      {
        id: 5,
        categoryName: 'Манікюр',
      },
      {
        id: 6,
        categoryName: 'Педикюр',
      },
      {
        id: 7,
        categoryName: 'Масаж',
      },
    ],
    rating: 5,
    comments: 87,
    address: {
      city: 'Львів',
      street: 'вул. Червона, 50',
    },
  },
  {
    id: 4,
    name: 'Лариса Трофімова',
    services: [
      {
        id: 1,
        categoryName: 'Стрижки',
      },
      {
        id: 2,
        categoryName: 'Зачіски',
      },
      {
        id: 3,
        categoryName: 'Візаж',
      },
      {
        id: 4,
        categoryName: 'Макіяж',
      },
      {
        id: 5,
        categoryName: 'Манікюр',
      },
      {
        id: 6,
        categoryName: 'Педикюр',
      },
      {
        id: 7,
        categoryName: 'Масаж',
      },
    ],
    rating: 5,
    comments: 87,
    address: {
      city: "Кам'янець-Подільський",
      street: 'вул. Троїцька, 23',
    },
  },
];

const TopMasters: React.FC = () => {
  return (
    <section className={s.masters}>
      <h2 className={s.masters_title}>
        <span className={s.masters_title_wrapper}>Топ</span> майстри
      </h2>
      <p className={s.masters_text}>Улюблені майстри наших користувачів</p>
      <div className={s.category_swiper}>
        <button className={s.category_swiper_btn_prev}>
          <svg className={s.category_swiper_icon} width={20} height={20}>
            <use href={`${arrow}#icon-arrow-left`}></use>
          </svg>
        </button>
        <Swiper
          className={s.category_swiper_swiper}
          modules={[Navigation]}
          slidesPerView="auto"
          navigation={{
            prevEl: `.${s.category_swiper_btn_prev}`,
            nextEl: `.${s.category_swiper_btn_next}`,
            disabledClass: `${s.category_swiper_disable}`,
          }}
        >
          {category.map(el => (
            <SwiperSlide key={el.id} className={s.category_swiper_slide}>
              <p>{el.categoryName}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={s.category_swiper_btn_next}>
          <svg className={s.category_swiper_icon} width={20} height={20}>
            <use href={`${arrow}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
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
        {mastersArr.map(el => (
          <SwiperSlide key={el.id} className={s.masters_swiper_slide}>
            <div className={s.img_wrap}>
              <img className={s.img_wrap_img} src={masterDef} alt="avatar" />
            </div>
            <div className={s.info_wrap}>
              <h3 className={s.info_wrap_title}>{el.name}</h3>
              <ul className={s.info_wrap_category_list}>
                <li>
                  <button className={s.info_wrap_category_list_btn}>
                    {el.services[0].categoryName}
                  </button>
                </li>
                <li>
                  <button className={s.info_wrap_category_list_btn}>
                    {el.services[1].categoryName}
                  </button>
                </li>
                <li>
                  <button className={s.info_wrap_category_list_btn}>
                    + ще {el.services.length - 2}
                  </button>
                </li>
              </ul>
              <div className={s.info_wrap_rating}>
                <Rating initialValue={el.rating} readonly={true} size={11} />
                <p className={s.info_wrap_rating_num}>{`${el.rating}`}</p>
                <p className={s.info_wrap_comments}>
                  {`${el.comments} відгуків`}
                </p>
              </div>
              <p className={s.info_wrap_address}>{el.address.city}</p>
              <p className={s.info_wrap_address}>{el.address.street}</p>
              <button
                className={`
              ${s.info_wrap_btn}
              ${s.info_wrap_btn_about}`}
              >
                Про майстра
              </button>
              <button
                className={`
              ${s.info_wrap_btn}
              ${s.info_wrap_btn_record}`}
              >
                Запис
              </button>
            </div>
          </SwiperSlide>
        ))}
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
