import { createReducer } from 'typesafe-actions';
import { initializeAsync } from './actions';

export type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: false,
};

export const reducer = createReducer(initialState).handleAction(
  initializeAsync.success,
  (state, payload) => ({
    ...state,
    ...payload,
  })
);
