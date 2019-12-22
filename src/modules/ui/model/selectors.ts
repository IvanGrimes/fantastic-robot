import { RootState } from '@model/types';

export const getIsHeaderVisible = (state: RootState) =>
  state.ui.isHeaderVisible;

export const getIsBottomNavigationVisible = (state: RootState) =>
  state.ui.isBottomNavigationVisible;

export const getIsBot = (state: RootState) => state.ui.isBot;
