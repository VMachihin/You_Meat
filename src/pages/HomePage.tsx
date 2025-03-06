import { Outlet } from 'react-router';

import { Header } from '@/widgets/Header';
import { Navigation } from '@/widgets/Navigation';
import { Footer } from '@/widgets/Footer';
import { Modal } from '@/shared/ui/Modal';

export const HomePage = () => {
  return (
    <div className='content'>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />

      <Modal>
        Тут должен быть контент карточки продукта, на который мы кликнули
      </Modal>
    </div>
  );
};
