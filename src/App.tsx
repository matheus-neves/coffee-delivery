import { router } from '@src/routes/Router';
import { GlobalStyles } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ThemeProvider>
  );
}
