import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Icon } from '../UI';
import s from './Header.module.scss';
import { Navigation } from 'swiper/modules';

interface ICategory {
  id: number;
  name: string;
}

const category: ICategory[] = [
  { id: 1, name: 'Волосся' },
  { id: 2, name: 'Нігті' },
  { id: 3, name: 'Обличчя' },
  { id: 4, name: 'Тіло' },
  { id: 5, name: 'Барбер послуги' },
  { id: 6, name: 'Послуги від учнів*' },
];

const FixedMenu = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickMenu = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <div className={s.fixed_header}>
      <div className={s.fixed_header_wrap}>
        <ul
          className={`${s.fixed_header_list} ${isOpenModal && s.fixed_header_list_open}`}
        >
          <li>
            <Link to={'/services'}>Послуги</Link>
          </li>
          <li>
            <Link to={'/specialists'}>Майстри</Link>
          </li>
          <li>
            <Link to={'/about'}>Про нас</Link>
          </li>
          <li>
            <Link to={'/contacts'}>Контакти</Link>
          </li>
        </ul>
        <button onClick={handleClickMenu} className={s.fixed_header_btn}>
          <p>Головна</p>
          <Icon
            id={isOpenModal ? 'icon-close' : 'icon-menu'}
            style={s.fixed_header_icon}
          />
        </button>
      </div>
      <div className={s.fixed_header_menu}></div>
    </div>
  );
};

const Header: React.FC = () => {
  const [showFixedMenu, setShowFixedMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleCheckWidth = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 120) {
        setShowFixedMenu(true);
      } else {
        setShowFixedMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleCheckWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleCheckWidth);
    };
  }, [window.scrollY, isMobile]);

  return (
    <>
      <header className={s.header}>
        <div className={s.header_wrap}>
          <Link to={'/'} className={s.header_logo}>
            <Icon id={'icon-Logo'} style={s.header_logo_icon} />
          </Link>
          {isMobile ? (
            <button
              className={s.header_auth_btn}
              onClick={handleClickLogin}>
              Вхід
              <Icon id={'icon-user'} style={s.header_auth_btn_icon} />
            </button>
          ) : (
            <ul className={s.header_nav_list}>
              <li>
                <button className={s.header_nav_list_btn}>
                  <Icon id={'icon-Master2'} style={s.header_nav_list_icon} />
                </button>
              </li>
              <li>
                <button className={s.header_nav_list_btn}>
                  <Icon id={'icon-user'} style={s.header_nav_list_icon} />
                </button>
              </li>
              <li>
                <button className={s.header_nav_list_btn}>
                  <Icon id={'icon-menu'} style={s.header_nav_list_icon} />
                </button>
              </li>
            </ul>
          )}
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
      {showFixedMenu && isMobile && <FixedMenu />}
    </>
  );
};

export { Header };
