import { createReducer } from 'typesafe-actions';
import { StudioListService, RoomListService } from './services';
import { fetchStudioListAsync } from './actions';

export type ListState = {
  studioList: StudioListService;
  roomList: RoomListService;
};

export const initialState: ListState = {
  studioList: [],
  roomList: [],
};

export const reducer = createReducer(initialState).handleAction(
  fetchStudioListAsync.success,
  (state, action) => ({
    ...state,
    studioList: action.payload,
  })
);
