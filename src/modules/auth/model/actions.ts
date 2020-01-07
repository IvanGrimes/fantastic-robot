import { createAction } from 'typesafe-actions';
import { AuthView } from './types';

export const changeForm = createAction(
  'auth/CHANGE_AUTH_FORM',
  action => (payload: { visibility?: boolean; view?: AuthView }) =>
    action(payload)
);
