import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '$/app';
import '$/styles/globals.css';
import '$/styles/fonts.css';

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
