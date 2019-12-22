import styled from 'styled-components';
import {
  Carousel as DefaultCarousel,
  CarouselProps,
} from '@modules/ui/components/Carousel';
import {
  LazyImage as DefaultLazyImage,
  LazyImageProps,
} from '@modules/ui/components/LazyImage';
import { ComponentType } from 'react';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
`;

export const Carousel = styled<ComponentType<CarouselProps>>(DefaultCarousel)`
  && {
    max-height: 500px;
  }
`;

export const LazyImage = styled<ComponentType<LazyImageProps>>(
  DefaultLazyImage
)`
  && {
    & > img {
      max-height: 500px;
      object-fit: cover;
    }
  }
`;
