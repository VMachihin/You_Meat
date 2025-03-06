import { ProductItemsType } from '@/shared/types/productItems';
import { useProductCard } from '../model/useProductCard';

import './ProductCard.scss';

export const ProductCard = (props: ProductItemsType) => {
  const { id, title, imgSrc, price, weight } = props;
  const { handleOpenModal } = useProductCard();

  return (
    <li className='product-card' onClick={() => handleOpenModal(id)}>
      <div className='product-card__image-wrapper'>
        <img
          src={imgSrc}
          alt=''
          className='product-card__image'
          width={276}
          height={220}
        />
      </div>
      <div className='product-card__body'>
        <h4 className='product-card__price'>{price} ₽</h4>
        <div className='product-card__title'>
          <p>{title}</p>
        </div>
        <span className='product-card__weight'>{weight}г</span>
      </div>

      <button
        className='product-card__button'
        onClick={(event) => {
          event.stopPropagation();
          console.log('click по кнопке');
        }}
      >
        Добавить
      </button>
    </li>
  );
};
