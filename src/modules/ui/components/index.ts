import { createGlobalStyle } from 'styled-components';

export * from './Layout';
export * from './Carousel';
export * from './ChipList';
export * from './ClearableInput';
export * from './Container';
export * from './Hidden';
export * from './InfiniteScroll';
export * from './LazyImage';
export * from './Link';
export * from './Loader';
export * from './PropertyList';
export * from './SEO';
export * from './DynamicRendering';
export * from './Select';
export * from './Layout/BaseHeaderBar';
export * from './SlideTransition';
export * from './GoogleMap';

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
