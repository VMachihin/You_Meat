import { NavLink } from 'react-router';

import { menuItems } from '../lib/menuItems';

import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className='nav'>
      <div className='nav__inner container'>
        <ul className='nav__list'>
          {menuItems.map((menuItems) => (
            <li className='nav__item' key={menuItems.link}>
              <NavLink
                to={`/${menuItems.link}`}
                className='nav__link'
                aria-label={menuItems.title}
                title={menuItems.title}
              >
                <img
                  src={menuItems.iconSrc}
                  alt=''
                  width={24}
                  height={24}
                  loading='lazy'
                />
                <span className='nav__item-title'>{menuItems.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
