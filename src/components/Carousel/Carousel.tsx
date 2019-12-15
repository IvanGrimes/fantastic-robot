import React, { Fragment, memo } from 'react';
import Slick from 'react-slick';
import { CarouselProps } from './index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselStyles } from './Carousel.styles';

const _Carousel = ({ className = '', children }: CarouselProps) => {
  return (
    <Fragment>
      <CarouselStyles />
      <Slick
        className={className}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        dots
      >
        {children}
      </Slick>
    </Fragment>
  );
};

export const Carousel = memo(_Carousel);
