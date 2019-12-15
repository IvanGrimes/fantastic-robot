import { createGlobalStyle } from 'styled-components';

export * from './BottomNavigation';
export * from './Header';
export * from './Layout';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=cyrillic');
  
  html {
    font-size: 16px !important;
  }
  
  body {
    font-size: 16px !important;
    width: 100%;
  }
  
  body * {
    box-sizing: border-box;
  }
  
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  
  li {
    padding: 0;
    margin: 0;
  }
`;
