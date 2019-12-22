import React, { ReactNode, useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type CarouselOwnProps = {
  className?: string;
  children: ReactNode | ReactNode[];
  onInit?: () => void;
};

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

console.log(Carousel)
