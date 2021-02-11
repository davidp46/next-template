import { css } from 'styled-components';

export const fontsFaces = css`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/Inter-var.ttf') format('truetype-variations');
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/WorkSans-var.ttf') format('truetype-variations');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/Montserrat-var.woff2') format('woff2-variations');
  }
`;
