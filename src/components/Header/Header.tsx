import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

import s from './Header.module.scss';
import {Link} from 'react-router-dom';
import {Icon} from "../UI";

interface ICategory {
  id: number;
  name: string;
}

const category: ICategory[] = [
  {id: 1, name: 'Волосся'},
  {id: 2, name: 'Нігті'},
  {id: 3, name: 'Обличчя'},
  {id: 4, name: 'Тіло'},
  {id: 5, name: 'Барбер послуги'},
  {id: 6, name: 'Послуги від учнів*'},
];

const MainHeader: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header_wrap}>
        <Link to={'/'} className={s.logo}>
          <Icon id={'icon-Logo'} style={s.logo_icon}/>
        </Link>
        <button className={s.auth_btn}>
          Вхід
          <Icon id={'icon-user'} style={s.auth_btn_icon}/>
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        className={s.category_swiper}
        slidesPerView="auto"
      >
        {category.map(el => (
          <SwiperSlide key={el.id} className={s.category_swiper_slide}>
            <p>{el.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

const FixedHeader = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleClickMenu = () => {
    setIsOpenModal(prev => !prev)
  }


  return <div className={s.fixed_header}>
    <div className={s.fixed_header_wrap}>
        <ul className={`${s.fixed_header_list} ${isOpenModal && s.fixed_header_list_open}`}>
        <li><Link to={'/'}>Послуги</Link></li>
        <li><Link to={'/'}>Майстри</Link></li>
        <li><Link to={'/'}>Про нас</Link></li>
        <li><Link to={'/'}>Контакти</Link></li>
      </ul>
      <button onClick={handleClickMenu} className={s.fixed_header_btn}>
        <p>Головна</p>
        <Icon id={isOpenModal ? 'icon-close' : 'icon-menu'}
              style={s.fixed_header_icon}/>
      </button>
    </div>
    <div className={s.fixed_header_menu}></div>
  </div>;
};

const Header: React.FC = () => {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 120) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);

  return (
    <>
      <MainHeader/>
      {showFixedHeader && <FixedHeader/>}
    </>
  );
};

export default Header;
