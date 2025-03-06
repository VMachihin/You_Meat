import { FC, useEffect } from 'react';

import { useModal } from '../model/useModal';
import { Icon } from '@/shared/ui/Icon';

import './Modal.scss';

interface IModelProps {
  children: React.ReactNode;
}

export const Modal: FC<IModelProps> = ({ children }) => {
  const { dialogRef, isOpen, handleClose } = useModal();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.classList.add('is-lock');
    } else {
      dialogRef.current?.close();
      document.body.classList.remove('is-lock');
    }
  }, [dialogRef, isOpen]);

  return (
    <dialog aria-labelledby='title' className='modal' ref={dialogRef}>
      {children}
      <button
        type='button'
        onClick={handleClose}
        className='modal__close-button'
      >
        <Icon iconId='close' className='modal__close-icon' />
      </button>
    </dialog>
  );
};
