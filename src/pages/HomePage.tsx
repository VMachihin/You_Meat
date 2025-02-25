import { Header } from '@/widgets/Header';
import { Navigation } from '@/widgets/Navigation';
import { Menu } from '@/widgets/Menu';
import { AsideCart } from '@/widgets/AsideCart';
import { Footer } from '@/widgets/Footer';

export const HomePage = () => {
  return (
    <div className='content'>
      <Header />
      <Navigation />
      <main>
        <AsideCart />
        <Menu />
      </main>
      <Footer />
    </div>
  );
};
