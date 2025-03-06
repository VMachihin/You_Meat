import { ProductList } from '@/widgets/ProductList';
import { AsideCart } from '@/widgets/AsideCart';

import './Menu.scss';

export const Menu = () => {
  return (
    <section className='menu'>
      <div className='menu__inner container'>
        <AsideCart />
        <ProductList />
      </div>
    </section>
  );
};
