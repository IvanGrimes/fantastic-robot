import { RootState } from '../../../model/types';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';

const getStudioMapListState = (state: RootState) => state.studioMapList;

export const getPreviewStudio = createDeepEqualSelector(
  [getStudioMapListState],
  state => state.preview
);

export const getIsEnabled = (state: RootState) => state.studioMapList.isEnabled;

export const getIsFullscreen = (state: RootState) =>
  state.studioMapList.isFullscreen;
