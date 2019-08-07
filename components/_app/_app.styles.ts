import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=cyrillic');
  
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
