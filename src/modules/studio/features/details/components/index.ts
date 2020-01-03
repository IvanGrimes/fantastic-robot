import dynamic from 'next/dynamic';
import { DetailsProps } from './DetailsContainer';

export const Details = dynamic<DetailsProps>(() =>
  import('./DetailsContainer').then(m => m.DetailsContainer)
);
