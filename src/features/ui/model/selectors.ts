import { RootState } from '../../../model/types';

export const getIsMapVisible = (state: RootState) => state.ui.isMapVisible;

export const getIsHeaderVisible = (state: RootState) =>
  state.ui.isHeaderVisible;

export const getIsBottomNavigationVisible = (state: RootState) =>
  state.ui.isBottomNavigationVisible;

export const getIsFullscreenMap = (state: RootState) =>
  state.ui.isFullscreenMap;
