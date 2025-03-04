import FooterLogoIcon from '@/shared/assets/icons/footer-logo.svg';
import { soc1alLinks } from '../lib/soc1alLinks';

import './Footer.scss';
import { NavLink } from 'react-router';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner container'>
        <div className='footer__top'>
          <NavLink
            to='/'
            aria-label='Главная'
            title='Главная'
            rel='noreferrer'
            className='footer__logo'
          >
            <img
              src={FooterLogoIcon}
              alt='главный логотип'
              width={300}
              height={58}
              className='footer__image'
            />
          </NavLink>

          <div className='footer__contacts'>
            <div className='footer__phone'>
              <h4 className='footer__title'>Номер для заказа</h4>
              <a href='tel:+79308333811' className='footer__phone-link'>
                +7(930)833-38-11
              </a>
            </div>
            <div className='footer__soc1als'>
              <h4 className='footer__title'>Мы в соцсетях</h4>
              <ul className='footer__soc1al-list'>
                {soc1alLinks.map((soc1alLink, index) => (
                  <li className='footer__soc1al-item' key={index}>
                    <a
                      href={soc1alLink.href}
                      className='footer__soc1al-link'
                      aria-label={soc1alLink.title}
                      title={soc1alLink.title}
                    >
                      <img
                        src={soc1alLink.imgSrc}
                        alt=''
                        className='footer__soc1al-image'
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='footer__copy'>
          <span>© YouMeal, 2022</span>
          <span>Design: Anastasia Ilina</span>
        </div>
      </div>
    </footer>
  );
};
