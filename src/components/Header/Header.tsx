import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Icon } from '../UI';
import s from './Header.module.scss';
import { Navigation } from 'swiper/modules';

const tablet = 768;
const laptop = 1280;

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
    </div>
  );
};

const NavMobile: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <button className={s.header_nav_btn} onClick={handleClick}>
      Вхід
      <Icon id={'icon-user'} style={s.header_nav_btn_icon} />
    </button>
  );
};

const NavTablet: React.FC = () => {
  return (
    <ul className={s.header_list_btn}>
      <li>
        <button className={s.header_nav_btn}>
          <Icon id={'icon-Master2'} style={s.header_nav_btn_icon} />
        </button>
      </li>
      <li>
        <button className={s.header_nav_btn}>
          <Icon id={'icon-user'} style={s.header_nav_btn_icon} />
        </button>
      </li>
      <li>
        <button className={s.header_nav_btn}>
          <Icon id={'icon-menu'} style={s.header_nav_btn_icon} />
        </button>
      </li>
    </ul>
  );
};

const NavLaptop: React.FC = () => {
  return (
    <>
      <ul className={s.header_list_link}>
        <li>
          <Link to={'/services'} className={s.header_nav_link}>Послуги</Link>
        </li>
        <li>
          <Link to={'/specialists'} className={s.header_nav_link}>Майстри</Link>
        </li>
        <li>
          <Link to={'/about'} className={s.header_nav_link}>Про нас</Link>
        </li>
        <li>
          <Link to={'/contacts'} className={s.header_nav_link}>Контакти</Link>
        </li>
      </ul>
      <ul className={s.header_list_btn}>
        <li>
          <button className={s.header_nav_btn}>
            Стати майстром
          </button>
        </li>
        <li>
          <button className={s.header_nav_btn}>
            Профіль
            <Icon id={'icon-user'} style={s.header_nav_btn_icon} />
          </button>
        </li>
      </ul>
    </>
  );
};

const Header: React.FC = () => {
  const [showFixedMenu, setShowFixedMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleCheckWidth = () => {
    setWidth(window.innerWidth);
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
  }, [window.scrollY, width]);

  return (
    <>
      <header className={s.header}>
        <div className={s.header_wrap}>
          <Link to={'/'} className={s.header_logo}>
            <Icon id={'icon-Logo'} style={s.header_logo_icon} />
          </Link>
          <nav className={s.header_nav}>
            {width < tablet && <NavMobile />}
            {width >= tablet && width < laptop && <NavTablet />}
            {width >= laptop && <NavLaptop />}
          </nav>
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
      {showFixedMenu && width < tablet && <FixedMenu />}
    </>
  );
};

export { Header };
