import { AsideCart } from '@/widgets/AsideCart';
import { ProductList } from '@/widgets/ProductList';

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
