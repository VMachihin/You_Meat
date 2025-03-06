export type ProductItemsType = {
  id: string;
  title: string;
  imgSrc: string;
  price: string;
  weight: string;
};

export type ProductsCatalogType = [
  {
    catalogId: string;
    catalogTitle: string;
    catalogItems: ProductItemsType[];
  },
  {
    catalogId: string;
    catalogTitle: string;
    catalogItems: ProductItemsType[];
  },
  {
    catalogId: string;
    catalogTitle: string;
    catalogItems: ProductItemsType[];
  }
];
