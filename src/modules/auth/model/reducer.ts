import { createReducer } from 'typesafe-actions';
import { AuthView } from './types';
import { changeForm } from './actions';

export type AuthState = {
  isVisible: boolean;
  view: AuthView;
};

const initialState: AuthState = {
  isVisible: false,
  view: 'sign-in',
};

export const authReducer = createReducer(initialState).handleAction(
  changeForm,
  (
    state,
    { payload: { visibility = state.isVisible, view = state.view } }
  ) => ({
    ...state,
    isVisible: visibility,
    view,
  })
);
