import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { OwnProps } from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type CarouselProps = { skeleton: JSX.Element } & OwnProps;

export const Carousel = ({ skeleton, ...props }: CarouselProps) => {
  const Component = useMemo(
    () =>
      dynamic<OwnProps>(
        () => import('./Carousel').then(module => module.Carousel),
        { ssr: false, loading: () => skeleton }
      ),
    [skeleton]
  );

  return <Component {...props} />;
};
