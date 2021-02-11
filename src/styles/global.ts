import { createGlobalStyle } from 'styled-components';
import { fontsFaces } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${fontsFaces};

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Arial, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  strong, b, th, h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat';
  }
`;
