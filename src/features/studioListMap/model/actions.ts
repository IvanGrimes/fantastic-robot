import { createAction } from 'typesafe-actions';
import { ShortStudio } from '../../studioList/model/types';

export const setIsEnable = createAction(
  '@@studioMapList/SET_IS_ENABLE',
  action => (isEnabled: boolean) => action({ isEnabled })
);

export const setFullscreen = createAction(
  '@@studioMapList/SET_FULLSCREEN',
  action => (isFullscreen: boolean) => action({ isFullscreen })
);

export const setPreviewStudio = createAction(
  '@@studioMapList/SET_PREVIEW_STUDIO',
  action => (id: ShortStudio['id']) => action({ id })
);
