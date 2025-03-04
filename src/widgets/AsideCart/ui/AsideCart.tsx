import './AsideCart.scss';

export const AsideCart = () => {
  return (
    <aside className='aside-cart'>
      <div className='aside-cart__inner'>
        <h3 className='aside-cart__title'>Корзина</h3>
        <div className='aside-cart__counter'>0</div>
      </div>
      <span className='aside-cart__info'>Тут пока пусто :(</span>
    </aside>
  );
};
