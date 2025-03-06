import { ProductsCatalogType } from '@/shared/types/productItems';

import burger1Image from '../assets/images/burgers/burger_1.jpg';
import burger2Image from '../assets/images/burgers/burger_2.jpg';
import burger3Image from '../assets/images/burgers/burger_3.jpg';
import burger4Image from '../assets/images/burgers/burger_4.jpg';
import burger5Image from '../assets/images/burgers/burger_5.jpg';
import burger6Image from '../assets/images/burgers/burger_6.jpg';
//
import snacks1Image from '../assets/images/snacks/snacks_1.jpg';
import snacks2Image from '../assets/images/snacks/snacks_2.jpg';
import snacks3Image from '../assets/images/snacks/snacks_3.jpg';
//
import hotdogs1Image from '../assets/images/hot-dogs/hot-dog_1.jpg';
import hotdogs2Image from '../assets/images/hot-dogs/hot-dog_2.jpg';
import hotdogs3Image from '../assets/images/hot-dogs/hot-dog_3.jpg';

export const productsCatalog: ProductsCatalogType = [
  {
    catalogId: 'burgers',
    catalogTitle: 'Бургеры',
    catalogItems: [
      {
        id: '1',
        title: 'Мясная бомба',
        imgSrc: burger1Image,
        price: '689',
        weight: '520',
      },
      {
        id: '2',
        title: 'Супер сырный',
        imgSrc: burger2Image,
        price: '550',
        weight: '512',
      },
      {
        id: '3',
        title: 'Сытный',
        imgSrc: burger3Image,
        price: '639',
        weight: '580',
      },
      {
        id: '4',
        title: 'Тяжелый удар',
        imgSrc: burger4Image,
        price: '480',
        weight: '470',
      },
      {
        id: '5',
        title: 'Вечная классика',
        imgSrc: burger5Image,
        price: '450',
        weight: '520',
      },
      {
        id: '6',
        title: 'Итальянский',
        imgSrc: burger6Image,
        price: '510',
        weight: '520',
      },
    ],
  },
  {
    catalogId: 'snacks',
    catalogTitle: 'Закуски',
    catalogItems: [
      {
        id: '1',
        title: 'Начос',
        imgSrc: snacks1Image,
        price: '250',
        weight: '220',
      },
      {
        id: '2',
        title: 'Картошка фри',
        imgSrc: snacks2Image,
        price: '245',
        weight: '180',
      },
      {
        id: '3',
        title: 'Луковые кольца',
        imgSrc: snacks3Image,
        price: '230',
        weight: '160',
      },
    ],
  },
  {
    catalogId: 'hotdogs',
    catalogTitle: 'Хот-доги',
    catalogItems: [
      {
        id: '1',
        title: 'Домашний хот-дог',
        imgSrc: hotdogs1Image,
        price: '290',
        weight: '250',
      },
      {
        id: '2',
        title: 'Жгучий хот-дог',
        imgSrc: hotdogs2Image,
        price: '239',
        weight: '245',
      },
      {
        id: '3',
        title: 'Классический хот-дог',
        imgSrc: hotdogs3Image,
        price: '220',
        weight: '215',
      },
    ],
  },
];
