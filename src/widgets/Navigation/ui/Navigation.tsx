import { NavLink } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from '@/shared/ui/Icon';
import { menuItems } from '../lib/menuItems';
import { sliderParams } from '../lib/sliderParams';

import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className='nav'>
      <div className='nav__inner container'>
        <ul className='nav__list'>
          <Swiper {...sliderParams}>
            {menuItems.map((menuItems) => (
              <SwiperSlide key={menuItems.title}>
                <li className='nav__item'>
                  <NavLink
                    to={menuItems.routeName}
                    aria-label={menuItems.title}
                    title={menuItems.title}
                    className='nav__link'
                  >
                    <Icon
                      iconId={menuItems.iconSrc}
                      className='nav__link-icon'
                    />
                    <span className='nav__item-title'>{menuItems.title}</span>
                  </NavLink>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </nav>
  );
};
