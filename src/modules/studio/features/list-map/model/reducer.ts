import { createReducer } from 'typesafe-actions';
import { ShortStudio } from '../../list';
import { setIsEnable, setFullscreen, setPreviewStudio } from './actions';

export type StudioMapListState = {
  isEnabled: boolean;
  isFullscreen: boolean;
  preview: ShortStudio['id'] | null;
};

const initialState: StudioMapListState = {
  isEnabled: true,
  isFullscreen: false,
  preview: null,
};

export const reducer = createReducer(initialState)
  .handleAction(setIsEnable, (state, { payload: { isEnabled } }) => ({
    ...state,
    isEnabled,
  }))
  .handleAction(setFullscreen, (state, { payload: { isFullscreen } }) => ({
    ...state,
    isFullscreen,
  }))
  .handleAction(setPreviewStudio, (state, { payload }) => ({
    ...state,
    preview: state.preview === payload.id ? null : payload.id,
  }));
