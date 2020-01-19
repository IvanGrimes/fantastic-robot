import { RootState } from '@model/types';
import * as services from '@modules/services';

const getState = (state: RootState) => state.studio.listMap;

export const getPreviewStudio = services.createDeepEqualSelector(
  [getState],
  state => state.preview
);

export const getIsEnabled = (state: RootState) => getState(state).isEnabled;

export const getIsFullscreen = (state: RootState) =>
  getState(state).isFullscreen;
