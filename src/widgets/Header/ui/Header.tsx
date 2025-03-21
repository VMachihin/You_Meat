import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <a href='/' aria-label='Главная' title='Главная' className='header__logo'>
        <img
          src='src/shared/assets/icons/logo.svg'
          alt=''
          width={150}
          height={29}
        />
      </a>
      <div className='header__inner container'>
        <img
          src='src/shared/assets/images/main-burger.png'
          alt=''
          width={326}
          height={326}
          className='header__image'
        />
        <div className='header__content'>
          <h1 className='header__title'>
            Только самые <span>сочные бургеры!</span>
          </h1>
          <p className='header__subtitle'>Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </header>
  );
};
