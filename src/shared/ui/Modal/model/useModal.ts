import { useRef } from 'react';

import { closeModal } from '@/features/modals/modalSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useRedux';

export const useModal = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return { dialogRef, isOpen, handleClose };
};
