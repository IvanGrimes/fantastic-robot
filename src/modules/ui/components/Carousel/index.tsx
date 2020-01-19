import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import * as services from '@modules/services';
import { CarouselOwnProps } from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type CarouselProps = {
  skeleton?: JSX.Element | null;
} & CarouselOwnProps;

export const Carousel = ({ skeleton = null, ...props }: CarouselProps) => {
  const { isBot } = services.useWithSEO();
  const Component = useMemo(
    () =>
      dynamic<CarouselOwnProps>(
        () => import('./Carousel').then(module => module.Carousel),
        { ssr: false, loading: () => skeleton }
      ),
    [skeleton]
  );

  if (isBot) {
    return <>{props.children}</>;
  }

  return <Component {...props} />;
};
