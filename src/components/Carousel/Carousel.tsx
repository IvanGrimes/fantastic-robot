import React, { Fragment, memo } from 'react';
import Slick from 'react-slick';
import { CarouselProps } from './index';
import { SlickStyles, CarouselStyles } from './Carousel.styles';

// TODO: Probably, I should show skeleton before init and while data is loading inside Carousel

const _Carousel = ({
  className = '',
  onInit = undefined,
  children,
}: CarouselProps) => (
  <Fragment>
    <SlickStyles />
    <CarouselStyles />
    <Slick
      className={className}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      onInit={onInit}
      dots
    >
      {children}
    </Slick>
  </Fragment>
);

export const Carousel = memo(_Carousel);
