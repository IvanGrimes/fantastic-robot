import { selectors } from '@shared';
import { fetchStudioListAsync, fetchRoomListAsync } from './actions';

export const getState = (state: RootState) => state.catalog.list;

export const getStudioListLoading = selectors.getRequestLoading(
  fetchStudioListAsync.request
);

export const getStudioListError = selectors.getRequestError(
  fetchStudioListAsync.request
);

export const getStudioList = (state: RootState) =>
  getState(state).studioList.list;

export const getHasNextStudioList = (state: RootState) =>
  getState(state).studioList.hasNext;

export const getRoomListLoading = selectors.getRequestLoading(
  fetchRoomListAsync.request
);

export const getRoomListError = selectors.getRequestError([
  fetchRoomListAsync.request,
]);

export const getRoomList = (state: RootState) => getState(state).roomList.list;

export const getHasNextRoomList = (state: RootState) =>
  getState(state).roomList.hasNext;
