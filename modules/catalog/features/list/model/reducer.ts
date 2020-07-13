import { createReducer } from 'typesafe-actions';
import { StudioListService, RoomListService } from './services';
import { fetchStudioListAsync, fetchRoomListAsync } from './actions';

export type ListState = {
  studioList: {
    hasNext: boolean;
    list: StudioListService;
  };
  roomList: {
    hasNext: boolean;
    list: RoomListService;
  };
};

export const initialState: ListState = {
  studioList: {
    hasNext: false,
    list: [],
  },
  roomList: {
    hasNext: false,
    list: [],
  },
};

export const reducer = createReducer(initialState)
  .handleAction(fetchStudioListAsync.success, (state, action) => ({
    ...state,
    studioList: {
      ...state.studioList,
      list: action.payload,
      hasNext: Boolean(action.payload.length),
    },
  }))
  .handleAction(fetchRoomListAsync.success, (state, action) => ({
    ...state,
    roomList: {
      ...state.roomList,
      list: action.payload,
      hasNext: Boolean(action.payload.length),
    },
  }));
