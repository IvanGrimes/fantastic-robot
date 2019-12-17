import React, { Fragment, memo, ReactNode, useEffect, useState } from 'react';
import Slick from 'react-slick';
import { CarouselStyles } from './Carousel.styles';

export type OwnProps = {
  className?: string;
  children: ReactNode | ReactNode[];
  onInit?: () => void;
};

const _Carousel = ({
  className = '',
  onInit = undefined,
  children,
}: OwnProps) => {
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
