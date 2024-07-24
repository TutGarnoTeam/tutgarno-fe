import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss/pagination';

import PopularServicesItem from './PopularServicesItem/PopularServicesItem.tsx';
import { Icon } from '../UI';
import s from './PopularServicesList.module.scss';

interface IServicesDB {
  id: string;
  title: string;
  nameIcon: string;
}

const popularServiceDB: IServicesDB[] = [
  { id: '1', title: 'Манікюр', nameIcon: 'manicure' },
  { id: '2', title: 'Фарбування волосся', nameIcon: 'colouringHair' },
  { id: '3', title: 'Стрижка вусів', nameIcon: 'trimmingMoustache' },
  { id: '4', title: 'Процедури для брів', nameIcon: 'proceduresForEyebrows' },
  { id: '5', title: 'Стрижки жіночі', nameIcon: 'haircutsWomen' },
  { id: '6', title: 'Ін’єкціїї краси', nameIcon: 'injectionsOfBeauty' },
  { id: '7', title: 'Стрижка бороди', nameIcon: 'beardTrimming' },
  { id: '8', title: 'Видалення волосся', nameIcon: 'removalOfHair' },
  { id: '9', title: 'Стрижки чоловічі', nameIcon: 'haircutsMen' },
  { id: '10', title: 'Зачіски весільні', nameIcon: 'hairstylesWedding' },
  { id: '11', title: 'Макіяж', nameIcon: 'makeup' },
  { id: '12', title: 'Процедури для вій', nameIcon: 'proceduresForEyelashes' },
  { id: '13', title: 'Педикюр', nameIcon: 'pedicure' },
  { id: '14', title: 'Пілінг обличчя', nameIcon: 'facialPeeling' },
  { id: '15', title: 'Нарощення вій', nameIcon: 'eyelashExtensions' },
];

const PopularServicesList: React.FC = () => {
  const navigate = useNavigate();

  const handleClickSlide = (id: string) => {
    navigate('/services/:' + id);
  };

  return (
    <div className={s.services}>
      <div className={s.services_text_wrap}>
        <h2 className={s.services_title}>Популярні послуги</h2>
        <p className={s.services_text}>Улюблені послуги наших користувачів</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        className={s.services_swiper}
        slidesPerView={'auto'}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: `.${s.btn_prev}`,
          nextEl: `.${s.btn_next}`,
          disabledClass: `${s.btn_disable}`,
        }}
      >
        {popularServiceDB.map((el, index) => (
          <SwiperSlide
            key={el.id}
            virtualIndex={index}
            className={s.services_swiper_slide}
            onClick={() => {
              handleClickSlide(el.id);
            }}
          >
            <PopularServicesItem title={el.title} nameIcon={el.nameIcon} />
          </SwiperSlide>
        ))}
        <div className={s.btn_wrap}>
          <button className={s.btn_prev}>
            <Icon id={'icon-arrow-left-1'} style={s.icon} />
          </button>
          <button className={s.btn_next}>
            <Icon id={'icon-arrow-right-1'} style={s.icon} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default PopularServicesList;
