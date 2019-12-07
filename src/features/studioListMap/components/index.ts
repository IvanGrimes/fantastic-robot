import { StudioListMapContainer } from './StudioListMapContainer';
import { featuresConfig } from '../../config';

export const StudioListMap = featuresConfig.studioListMap
  ? StudioListMapContainer
  : () => null;
