import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { floatToFraction } from '@utils/floatToFraction';
import { Loader as DefaultLoader, LoaderProps } from '@components/Loader';
import {
  Carousel as DefaultCarousel,
  CarouselProps,
} from '@components/Carousel';

export const Wrapper = styled.div`
  && {
    display: flex;
    width: 100%;
    position: relative;
    padding-bottom: ${100 / floatToFraction(16.9)}%;
  }
`;

export const Loader = styled<ComponentType<LoaderProps>>(DefaultLoader)`
  && {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Carousel = styled<ComponentType<CarouselProps>>(DefaultCarousel)<{
  isLoaded: boolean;
}>`
  ${({ isLoaded }) => css`
    position: ${isLoaded ? 'relative' : 'absolute'};
  `};
`;
