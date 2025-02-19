import { Header } from '@/widgets/Header';
import { Navigation } from '@/widgets/Navigation';

export const HomePage = () => {
  return (
    <div className='content'>
      <Header />
      <Navigation />
      <main></main>
      <footer>footer</footer>
    </div>
  );
};
