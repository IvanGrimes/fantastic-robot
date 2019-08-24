import { createAction } from 'typesafe-actions';

export const toggleMapVisibility = createAction('@@UI/TOGGLE_MAP_VISIBILITY');

export const setHeaderVisibility = createAction(
  '@@UI/SET_HEADER_VISIBILITY',
  action => (visibility: boolean) => action({ visibility })
);
