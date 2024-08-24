import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  font-family: Poppins, sans-serif;
}
html {
  scroll-behavior: smooth;
}

:root {
  --primary-color: #038489;
  --secondary-color: #ffdc40;
  --color-title: #393939;
  --color-normal: #f8fafc;
  --color-text: #6A6A6A;
  --color-text-navbar: #989898;
  --color-card: #1E1E1E;
  --color-hero: #2A2A2A;
  
  --color-bg: #121212;
}

`;

export default GlobalStyle;
