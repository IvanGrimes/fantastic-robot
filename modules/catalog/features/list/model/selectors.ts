import { selectors } from '@shared';
import { fetchStudioListAsync } from './actions';

export const getState = (state: RootState) => state.catalog.list;

export const getListLoading = selectors.getRequestLoading(
  fetchStudioListAsync.request
);

export const getListError = selectors.getRequestError([
  fetchStudioListAsync.request,
]);

export const getStudioList = (state: RootState) =>
  getState(state).studioList.list;

export const getHasNextList = (state: RootState) =>
  getState(state).studioList.hasNext;

export const getRoomList = (state: RootState) => getState(state).roomList;
