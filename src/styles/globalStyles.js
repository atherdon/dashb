import { createGlobalStyle, css } from 'styled-components';

const antdCss = css`
  ${import('antd/dist/antd.css')}
`;

export const GlobalStyles = createGlobalStyle`
  ${antdCss}

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font_primary};
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, a, p, li {
    margin: 0;
    padding: 0;
  }
`;
