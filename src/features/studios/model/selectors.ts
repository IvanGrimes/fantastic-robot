import { RootState } from '../../../model/types';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';

const getStudiosState = (state: RootState) => state.studios;

export const getStudioMap = createDeepEqualSelector(
  [getStudiosState],
  state => state.map
);

export const getStudioMapPreview = createDeepEqualSelector(
  [getStudioMap],
  state => state.preview
);
