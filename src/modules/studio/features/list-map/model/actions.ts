import { createAction } from 'typesafe-actions';
import { ShortStudio } from '../../list/model/types';

export const setIsEnable = createAction(
  'studio/list-map/SET_IS_ENABLE',
  action => (isEnabled: boolean) => action({ isEnabled })
);

export const setFullscreen = createAction(
  'studio/list-map/SET_FULLSCREEN',
  action => (isFullscreen: boolean) => action({ isFullscreen })
);

export const setPreviewStudio = createAction(
  'studio/list-map/SET_PREVIEW_STUDIO',
  action => (id: ShortStudio['id']) => action({ id })
);
