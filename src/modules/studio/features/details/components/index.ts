import dynamic from 'next/dynamic';
import { DetailsNewContainerProps } from './DetailsContainer';

export * from './types';

export const Details = dynamic<DetailsNewContainerProps>(() =>
  import('./DetailsContainer').then(m => m.DetailsContainer)
);
