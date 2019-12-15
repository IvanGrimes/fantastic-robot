import { listMap } from '@modules/studio';
import { FullscreenMapButtonContainer } from './FullscreenMapButtonContainer';

export const FullscreenMapButton = listMap.enabled
  ? FullscreenMapButtonContainer
  : () => null;
