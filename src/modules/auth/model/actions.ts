import { createAction, createAsyncAction } from 'typesafe-actions';

export const initializeAsync = createAsyncAction(
  'auth/INITIALIZE_REQUEST',
  'auth/INITIALIZE_SUCCESS',
  'auth/INITIALIZE_FAIL'
)<undefined, { isAuth: boolean }, any>();

export const signOut = createAction('auth/SIGN_OUT');
