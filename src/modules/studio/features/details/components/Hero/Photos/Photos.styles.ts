import styled from 'styled-components';
import { Carousel as DefaultCarousel } from '@components/Carousel';
import {
  LazyImage as DefaultLazyImage,
  LazyImageProps,
} from '@components/LazyImage';
import { ComponentType } from 'react';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Carousel = styled(DefaultCarousel)`
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
