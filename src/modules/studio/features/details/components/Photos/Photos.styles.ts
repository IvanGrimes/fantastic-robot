import styled from 'styled-components';
import * as ui from '@modules/ui';
import { ComponentType } from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

const { Carousel: DefaultCarousel, LazyImage: DefaultLazyImage } = ui

export const Wrapper = styled<ComponentType<GridProps>>(Grid)`
  display: flex;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
`;

export const Carousel = styled<ComponentType<ui.CarouselProps>>(DefaultCarousel)`
  && {
    max-height: 500px;
  }
`;

export const LazyImage = styled<ComponentType<ui.LazyImageProps>>(
  DefaultLazyImage
)`
  && {
    & > img {
      max-height: 500px;
      object-fit: cover;
    }
  }
`;
