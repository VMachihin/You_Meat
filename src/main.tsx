import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// регистрирует SVG-иконки в приложении
import 'virtual:svg-icons-register';

import App from './app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
