import { Outlet } from 'react-router';

import { Header } from '@/widgets/Header';
import { Navigation } from '@/widgets/Navigation';
import { AsideCart } from '@/widgets/AsideCart';
import { Footer } from '@/widgets/Footer';

export const HomePage = () => {
  return (
    <div className='content'>
      <Header />
      <Navigation />
      <main>
        <AsideCart />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
