export type ProductItemsType = {
  id: string;
  title: string;
  imgSrc: string;
  price: string;
  weight: string;
};

export type ProductsCatalogType = [
  {
    catalogId: '1';
    catalogTitle: string;
    catalogItems: ProductItemsType[];
  }
];
