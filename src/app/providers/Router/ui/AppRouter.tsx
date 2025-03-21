import { Navigate, Route, Routes } from 'react-router';

import { HomePage } from '@/pages/HomePage';
import { Menu } from '@/widgets/Menu';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route path='/' element={<Navigate to='burgers' replace />} />

        <Route path='burgers' element={<Menu />} />
        <Route path='snacks' element={<Menu />} />
        <Route path='hotdogs' element={<Menu />} />
        <Route path='combos' element={<Menu />} />
        <Route path='shawarmas' element={<Menu />} />
        <Route path='pizzas' element={<Menu />} />
        <Route path='boks' element={<Menu />} />
        <Route path='doughnuts' element={<Menu />} />
        <Route path='sauces' element={<Menu />} />
      </Route>
    </Routes>
  );
};
