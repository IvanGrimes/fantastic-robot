import dynamic from 'next/dynamic';
import { StudioListMapProps } from './StudioListMapContainer';

export const StudioListMap = dynamic<StudioListMapProps>(() =>
  import('./StudioListMapContainer').then(
    module => module.StudioListMapContainer
  )
);
