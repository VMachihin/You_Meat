import { openModal } from '@/features/modals/modalSlice';
import { useAppDispatch } from '@/shared/hooks/useRedux';
import { productsCatalog } from '@/shared/mock/productItems';

export const useProductCard = () => {
  const dispatch = useAppDispatch();

  const productWeFound = (id: string) => {
    productsCatalog.find((product) => product.catalogId === id);
  };

  const handleOpenModal = (id: string) => {
    console.log(productWeFound(id));
    dispatch(openModal());
  };

  return { handleOpenModal };
};
