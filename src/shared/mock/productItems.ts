import { ProductsCatalogType } from '@/shared/types/productItems';

import burger1Icon from '../assets/images/burgers/burger_1.jpg';
import burger2Icon from '../assets/images/burgers/burger_2.jpg';
import burger3Icon from '../assets/images/burgers/burger_3.jpg';
import burger4Icon from '../assets/images/burgers/burger_4.jpg';
import burger5Icon from '../assets/images/burgers/burger_5.jpg';
import burger6Icon from '../assets/images/burgers/burger_6.jpg';

export const productsCatalog: ProductsCatalogType = [
  {
    catalogId: '1',
    catalogTitle: 'Бургеры',
    catalogItems: [
      {
        id: '1',
        title: 'Мясная бомба',
        imgSrc: burger1Icon,
        price: '689',
        weight: '520',
      },
      {
        id: '2',
        title: 'Супер сырный',
        imgSrc: burger2Icon,
        price: '550',
        weight: '512',
      },
      {
        id: '3',
        title: 'Сытный',
        imgSrc: burger3Icon,
        price: '639',
        weight: '580',
      },
      {
        id: '4',
        title: 'Тяжелый удар',
        imgSrc: burger4Icon,
        price: '480',
        weight: '470',
      },
      {
        id: '5',
        title: 'Вечная классика',
        imgSrc: burger5Icon,
        price: '450',
        weight: '520',
      },
      {
        id: '6',
        title: 'Итальянский',
        imgSrc: burger6Icon,
        price: '510',
        weight: '520',
      },
    ],
  },
];
