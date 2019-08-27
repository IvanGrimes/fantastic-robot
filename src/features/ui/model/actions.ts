import { createAction } from 'typesafe-actions';

export const setMapVisibility = createAction(
  '@@UI/SET_MAP_VISIBILITY',
  action => (visibility: boolean) => action({ visibility })
);

export const setHeaderVisibility = createAction(
  '@@UI/SET_HEADER_VISIBILITY',
  action => (visibility: boolean) => action({ visibility })
);

export const setBottomNavigationVisibility = createAction(
  '@@UI/SET_BOTTOM_NAVIGATION_VISIBILITY',
  action => (visibility: boolean) => action({ visibility })
);

export const setFullscreenMap = createAction(
  '@@UI/SET_FULLSCREEN_MAP',
  action => (visibility: boolean) => action({ visibility })
);
