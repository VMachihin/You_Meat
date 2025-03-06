import { openModal } from '@/features/modals/modalSlice';
import { useAppDispatch } from '@/shared/hooks/useRedux';

export const useProductCard = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = (id: string) => {
    console.log(id);
    dispatch(openModal());
  };

  return { handleOpenModal };
};
