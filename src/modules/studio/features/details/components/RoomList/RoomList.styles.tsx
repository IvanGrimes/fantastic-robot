import styled from 'styled-components';
import { ComponentType } from 'react';
import * as ui from '@modules/ui';

const { Carousel } = ui

export const RoomListCarousel = styled<ComponentType<ui.CarouselProps>>(Carousel)`
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
