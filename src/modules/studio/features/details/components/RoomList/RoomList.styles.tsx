import styled from 'styled-components';
import { ComponentType } from 'react';
import { Carousel, CarouselProps } from '@modules/ui/components/Carousel';

export const RoomListCarousel = styled<ComponentType<CarouselProps>>(Carousel)`
  margin: 0 0 36px -10px;
  & > .slick-arrow {
    display: none !important;
  }
  & > .slick-dots {
    bottom: -32px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;
