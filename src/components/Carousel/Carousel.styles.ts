import { createGlobalStyle } from 'styled-components';

export const CarouselStyles = createGlobalStyle`
.slick-slider {
    width: 100%;
  }
  .slick-dots {
    bottom: 8px;
  }
  .slick-prev, .slick-next {
    z-index: 2;
    margin-top: -3px;
  }
  .slick-prev {
    left: 8px;
  }
  .slick-next {
    right: 8px;
  }
  .slick-prev::before {
    content: '\\02039';
  }
  .slick-next::before {
    content: '\\0203A';
  }
  .slick-prev,
  .slick-next {
    &::before {
      font-size: 60px;
      line-height: 0;
    }
  }
`;
