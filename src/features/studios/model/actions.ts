import { createAction } from 'typesafe-actions';
import { ShortStudio } from '../../studioList/model/types';

export const setStudioMapPreview = createAction(
  '@@STUDIOS/SET_STUDIO_MAP_PREVIEW',
  action => (id: ShortStudio['id']) => action({ id })
);
