import React, { Fragment, memo, ReactNode, useEffect, useState } from 'react';
import Slick from 'react-slick';
import { CarouselStyles } from './Carousel.styles';

export type CarouselOwnProps = {
  className?: string;
  children: ReactNode | ReactNode[];
  onInit?: () => void;
  slidesToShow?: number;
  centerMode?: boolean;
  centerPadding?: string;
  dots?: boolean;
  swipe?: boolean;
  infinite?: boolean;
};

const _Carousel = ({
  className = '',
  onInit = undefined,
  children,
  slidesToShow = 1,
  centerMode = false,
  centerPadding,
  dots = true,
  swipe = true,
  infinite = true,
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
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        onInit={onInit}
        centerMode={centerMode}
        centerPadding={centerPadding}
        dots={dots}
        swipe={swipe}
        infinite={infinite}
      >
        {children}
      </Slick>
    </Fragment>
  );
};

export const Carousel = memo(_Carousel);
