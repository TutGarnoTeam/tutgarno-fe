import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import * as EmailValidator from 'email-validator';

import s from './Footer.module.scss';
import { Icon } from '../UI';

const FooterForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setEmail(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (EmailValidator.validate(email)) {
      setEmail('');
    } else {
      alert('error email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.footer_form}>
      <h3 className={s.footer_form_title}>
        Стань частиною <span>tutgarno</span>
      </h3>
      <label className={s.footer_form_label}>
        <Icon id={'icon-email'} style={s.footer_form_icon} />
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder={'Впиши свій email'}
        />
      </label>
      <p className={s.footer_form_text}>
        Отримуй всі круті пропозиції про знижки, послуги та новини світу краси!
      </p>
      <button className={s.footer_form_btn}>Підписатися</button>
    </form>
  );
};

const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={s.footer}>
      <div className={s.footer_main}>
        <div className={s.footer_content}>
          <div className={s.footer_blocks}>
            <div className={s.footer_block}>
              <h3 className={s.footer_block_title}>Компанія</h3>
              <ul>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/'}
                    onClick={handleClick}
                  >
                    Головна
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/about'}
                    onClick={handleClick}
                  >
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/specialists'}
                    onClick={handleClick}
                  >
                    Майстри
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/services'}
                    onClick={handleClick}
                  >
                    Послуги
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/contacts'}
                    onClick={handleClick}
                  >
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
            <div className={s.footer_block}>
              <h3 className={s.footer_block_title}>Послуги</h3>
              <ul>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/process'}
                    onClick={handleClick}
                  >
                    Волосся
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/process'}
                    onClick={handleClick}
                  >
                    Нігті
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/process'}
                    onClick={handleClick}
                  >
                    Обличчя
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/process'}
                    onClick={handleClick}
                  >
                    Барбер послуги
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/process'}
                    onClick={handleClick}
                  >
                    Послуги від учнів*
                  </Link>
                </li>
              </ul>
            </div>
            <div className={s.footer_block}>
              <h3 className={s.footer_block_title}>Підтримка</h3>
              <ul>
                <li>
                  <a className={s.footer_block_link} href="tel:+380999999999">
                    +380 99 999 99 99
                  </a>
                </li>
                <li>
                  <a
                    className={s.footer_block_link}
                    href="mailto:info@tutgarno.ua"
                  >
                    info@tutgarno.ua
                  </a>
                </li>
                <li>
                  <Link
                    className={s.footer_block_link}
                    to={'/process'}
                    onClick={handleClick}
                  >
                    Часті запитання
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <FooterForm />
        </div>
        <div className={s.footer_second}>
          <Link className={s.footer_logo} to={'/'} onClick={handleClick}>
            <Icon id={'icon-Logo'} style={s.footer_logo_icon} />
          </Link>
          <ul className={s.footer_social_list}>
            <li>
              <a href="#" className={s.footer_social_list_link}>
                <Icon id={'icon-pinterest'} style={s.footer_social_list_icon} />
              </a>
            </li>
            <li>
              <a href="#" className={s.footer_social_list_link}>
                <Icon id={'icon-TikTok'} style={s.footer_social_list_icon} />
              </a>
            </li>
            <li>
              <a href="#" className={s.footer_social_list_link}>
                <Icon id={'icon-Facebook'} style={s.footer_social_list_icon} />
              </a>
            </li>
            <li>
              <a href="#" className={s.footer_social_list_link}>
                <Icon id={'icon-insta'} style={s.footer_social_list_icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className={s.footer_details}>
          <li>
            <a href="#">Публічна оферта</a>
          </li>
          <li>
            <a href="#">Угода користувача</a>
          </li>
          <li>
            <a href="#">Політика конфіденційності</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
