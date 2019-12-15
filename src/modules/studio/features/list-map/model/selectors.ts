import { RootState } from '@model/types';
import { createDeepEqualSelector } from '@lib/createDeepEqualSelector';

const getState = (state: RootState) => state.studio.listMap;

export const getPreviewStudio = createDeepEqualSelector(
  [getState],
  state => state.preview
);

export const getIsEnabled = (state: RootState) => getState(state).isEnabled;

export const getIsFullscreen = (state: RootState) =>
  getState(state).isFullscreen;
