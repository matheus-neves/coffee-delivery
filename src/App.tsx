import { GlobalStyles } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
