import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { CarouselOwnProps } from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type CarouselProps = { skeleton: JSX.Element } & CarouselOwnProps;

export const Carousel = ({ skeleton, ...props }: CarouselProps) => {
  const Component = useMemo(
    () =>
      dynamic<CarouselOwnProps>(
        () => import('./Carousel').then(module => module.Carousel),
        { ssr: false, loading: () => skeleton }
      ),
    [skeleton]
  );

  return <Component {...props} />;
};

console.log(Carousel);
