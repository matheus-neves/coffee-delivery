import { router } from '@src/routes/Router';
import { GlobalStyles } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
