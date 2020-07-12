import { createReducer } from 'typesafe-actions';
import { StudioListService, RoomListService } from './services';
import { fetchStudioListAsync } from './actions';

export type ListState = {
  studioList: {
    hasNext: boolean;
    list: StudioListService;
  };
  roomList: RoomListService;
};

export const initialState: ListState = {
  studioList: {
    hasNext: false,
    list: [],
  },
  roomList: [],
};

export const reducer = createReducer(initialState).handleAction(
  fetchStudioListAsync.success,
  (state, action) => ({
    ...state,
    studioList: {
      ...state.studioList,
      list: action.payload,
      hasNext: Boolean(action.payload.length),
    },
  })
);
