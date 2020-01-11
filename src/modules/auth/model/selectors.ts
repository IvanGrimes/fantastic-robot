import { RootState } from '@model/types';

const getState = (state: RootState) => state.auth;

export const getAuth = (state: RootState) => getState(state).isAuth;
