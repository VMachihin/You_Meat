import { HomePage } from '@/pages/HomePage';
import { ProductList } from '@/widgets/ProductList';
import { Route, Routes } from 'react-router';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<HomePage />}>
      <Route path='/burgers' element={<ProductList />} />
      <Route path='/snacks' element={<ProductList />} />
      <Route path='/hotdogs' element={<ProductList />} />
      <Route path='/combos' element={<ProductList />} />
      <Route path='/shawarmas' element={<ProductList />} />
      <Route path='/pizzas' element={<ProductList />} />
      <Route path='/boks' element={<ProductList />} />
      <Route path='/doughnuts' element={<ProductList />} />
      <Route path='/sauces' element={<ProductList />} />
    </Route>
  </Routes>
);
