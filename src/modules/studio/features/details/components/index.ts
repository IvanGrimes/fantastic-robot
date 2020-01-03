import dynamic from 'next/dynamic';
import { DetailsOwnProps } from './Details';

export const Details = dynamic<DetailsOwnProps>(() =>
  import('./DetailsContainer').then(m => m.DetailsContainer)
);
