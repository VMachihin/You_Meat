import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from '@/shared/ui/Icon';
import { menuItems } from '../lib/menuItems';

import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className='nav'>
      <div className='nav__inner container'>
        <ul className='nav__list'>
          <Swiper
            spaceBetween={20}
            slidesPerView={7}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {menuItems.map((menuItems, index) => (
              <SwiperSlide>
                <li className='nav__item' key={index}>
                  <a
                    href='/'
                    className='nav__link'
                    aria-label={menuItems.title}
                    title={menuItems.title}
                  >
                    <Icon iconId={menuItems.iconSrc} className='nav__icon' />
                    <span className='nav__item-title'>{menuItems.title}</span>
                  </a>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </nav>
  );
};
