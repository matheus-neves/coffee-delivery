import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.pallete['gray-100']};
    color: ${({ theme }) => theme.pallete['black-400']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
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


  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    animation: rotation 0.6s infinite linear;
  }

`;
