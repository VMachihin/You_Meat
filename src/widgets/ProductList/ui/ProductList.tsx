import { ProductCard } from '@/widgets/ProductCard';
import { productItems } from '../lib/productItems';
import { ProductItemsType } from '@/shared/types/productItems';

import './ProductList.scss';

export const ProductList = () => {
  return (
    <ul className='product__list'>
      {productItems.map((productItem: ProductItemsType) => (
        <ProductCard {...productItem} key={productItem.id} />
      ))}
    </ul>
  );
};
