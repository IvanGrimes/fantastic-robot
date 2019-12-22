import React, { Fragment, memo, useEffect, useState } from 'react';
import Slick from 'react-slick';
import { CarouselStyles } from './Carousel.styles';
import { CarouselOwnProps } from './index';

const _Carousel = ({
  className = '',
  onInit = undefined,
  children,
}: CarouselOwnProps) => {
  const [, forceUpdate] = useState(false);

  useEffect(() => {
    forceUpdate(true);
  }, []);

  return (
    <Fragment>
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
};

export const Carousel = memo(_Carousel);
