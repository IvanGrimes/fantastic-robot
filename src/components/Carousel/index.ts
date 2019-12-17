import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

export type CarouselProps = {
  className?: string;
  children: ReactNode | ReactNode[];
};

export const Carousel = dynamic<CarouselProps>(() =>
  import('./Carousel').then(module => module.Carousel)
);
