import { Provider } from 'react-redux';
import { AppRouter } from './providers/Router';

import { store } from '@/shared/store/store';
import './styles/index.scss';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

export default App;
