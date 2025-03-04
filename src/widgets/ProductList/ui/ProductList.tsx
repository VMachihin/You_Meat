import { ProductCard } from '@/widgets/ProductCard';
import { productsCatalog } from '@/shared/mock/productItems';

import './ProductList.scss';
import { useLocation } from 'react-router';

export const ProductList = () => {
  const location = useLocation();
  return (
    <ul className='product__list'>
      {productsCatalog.map((productItem) => (
        <>
          <h2 key={productItem.catalogId}>{productItem.catalogTitle}</h2>
          {productItem.catalogItems.map((item) => (
            <ProductCard {...item} key={item.id} />
          ))}
        </>
      ))}
    </ul>
  );
};
