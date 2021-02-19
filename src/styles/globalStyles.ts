import { createGlobalStyle } from 'styled-components';

// const antdCss = css`
//   ${import('antd/dist/antd.css')}
// `;
/* font-family: ${({ theme }) => theme.font_primary}; */
export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background-color: #f0f2f5;
    
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
