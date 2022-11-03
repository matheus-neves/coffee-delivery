import { router } from '@src/routes/Router';
import { GlobalStyles } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';
import { UserLocationContextProvider } from './contexts/UserLocationContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <UserLocationContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserLocationContextProvider>
    </ThemeProvider>
  );
}
