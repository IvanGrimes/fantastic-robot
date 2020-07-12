import { selectors } from '@shared';
import { fetchStudioListAsync, fetchStudioNextListAsync } from './actions';

export const getState = (state: RootState) => state.catalog.list;

export const getListLoading = selectors.getRequestLoading(
  fetchStudioListAsync.request
);

export const getListError = selectors.getRequestError([
  fetchStudioListAsync.request,
  fetchStudioNextListAsync.request,
]);

export const getStudioList = (state: RootState) =>
  getState(state).studioList.list;

export const getNextListLoading = selectors.getRequestLoading(
  fetchStudioNextListAsync.request
);

export const getHasNextList = (state: RootState) =>
  getState(state).studioList.hasNext;

export const getRoomList = (state: RootState) => getState(state).roomList;
