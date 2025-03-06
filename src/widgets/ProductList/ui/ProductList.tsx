import { useLocation } from 'react-router';

import { ProductCard } from '@/widgets/ProductCard';
import { productsCatalog } from '@/shared/mock/productItems';

import './ProductList.scss';

export const ProductList = () => {
  const location = useLocation().pathname.substring(1);

  const currentProductsCatalog = productsCatalog.find(
    (el) => el.catalogId === location
  );

  return (
    <div className='product__inner' key={currentProductsCatalog?.catalogId}>
      <h2 className='product__title'>{currentProductsCatalog?.catalogTitle}</h2>

      <ul className='product__list'>
        {currentProductsCatalog?.catalogItems.map((productItem) => (
          <ProductCard {...productItem} key={productItem.id} />
        ))}
      </ul>
    </div>
  );
};
