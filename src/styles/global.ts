import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus:not(a) {
    outline: 0;
    box-shadow: 0 0 2px 2px ${({ theme }) => theme.pallete['gray-400']};
  }

  body {
    background-color: ${({ theme }) => theme.pallete['gray-100']};
    color: ${({ theme }) => theme.pallete['black-400']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.pallete['black-800']};
  }

  h1 {
    font-weight: 800;
  }

  button {
    cursor: pointer;
  }

`;
