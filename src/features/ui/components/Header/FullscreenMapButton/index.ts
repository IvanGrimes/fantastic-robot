import { FullscreenMapButtonContainer } from './FullscreenMapButtonContainer';
import { featuresConfig } from '../../../../config';

export const FullscreenMapButton = featuresConfig.studioListMap
  ? FullscreenMapButtonContainer
  : () => null;
