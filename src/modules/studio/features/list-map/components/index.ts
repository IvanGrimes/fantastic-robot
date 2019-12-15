import dynamic from 'next/dynamic';
import { ListMapProps } from './ListMapContainer';

export const ListMap = dynamic<ListMapProps>(() =>
  import('./ListMapContainer').then(module => module.ListMapContainer)
);
