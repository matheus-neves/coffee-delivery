import { App } from '@src/App';
import { worker } from '@src/mocks/browser';
import React from 'react';
import ReactDOM from 'react-dom/client';

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
