import { NavLink } from 'react-router';
import { Icon } from '@/shared/ui/Icon';
import { soc1alLinks } from '../lib/soc1alLinks';

import './Footer.scss';

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
            <Icon iconId='footer-logo' className='footer__icon-logo' />
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
                      <Icon
                        iconId={soc1alLink.imgSrc}
                        className='footer__soc1al-icon'
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
