import * as studio from '@modules/studio';
import { FullscreenMapButtonContainer } from './FullscreenMapButtonContainer';

export const FullscreenMapButton = studio.listMap.enabled
  ? FullscreenMapButtonContainer
  : () => null;
