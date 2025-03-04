import { ProductItemsType } from '@/shared/types/productItems';

import './ProductCard.scss';

export const ProductCard = (props: ProductItemsType) => {
  const { title, imgSrc, price, weight } = props;

  return (
    <li className='product-card'>
      <a
        href=''
        className='product-card__link'
        aria-label={title}
        title={title}
      >
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
          <h4 className='product-card__title'>{price} ₽</h4>
          <div className='product-card__price'>
            <p>{title}</p>
          </div>
          <span className='product-card__weight'>{weight}г</span>
        </div>
      </a>
      <button
        className='product-card__button'
        onClick={() => console.log('click')}
      >
        Добавить
      </button>
    </li>
  );
};
