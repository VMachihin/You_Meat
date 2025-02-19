import { menuItems } from '../lib/menuItems';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className='nav'>
      <div className='nav__inner container'>
        <ul className='nav__list'>
          {menuItems.map((menuItems, index) => (
            <li className='nav__item' key={index}>
              <a
                href='/'
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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
