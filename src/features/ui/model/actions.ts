import { createAction } from 'typesafe-actions';

export const setHeaderVisibility = createAction(
  'ui/SET_HEADER_VISIBILITY',
  action => (visibility: boolean) => action({ visibility })
);

export const setBottomNavigationVisibility = createAction(
  'ui/SET_BOTTOM_NAVIGATION_VISIBILITY',
  action => (visibility: boolean) => action({ visibility })
);
