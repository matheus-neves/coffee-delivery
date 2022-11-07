import { router } from '@src/routes/Router';
import { GlobalStyles } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';
import { UserLocationContextProvider } from './contexts/UserLocationContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <GlobalStyles />
      <UserLocationContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserLocationContextProvider>
    </ThemeProvider>
  );
}
