import { RootState } from '@model/types';

const getState = (state: RootState) => state.auth;

export const getVisibility = (state: RootState) => getState(state).isVisible;

export const getView = (state: RootState) => getState(state).view;
