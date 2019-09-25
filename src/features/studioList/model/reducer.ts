import { createReducer } from 'typesafe-actions';
import { fetchFilterStudiosAsync, fetchStudiosAsync } from './actions';
import { StudiosResponse } from './api';
import { Studios } from './types';

export type StudioListState = Studios & {
  updateStrategy: 'merge' | 'replace';
};

const initialState: StudioListState = {
  studios: [],
  hasNext: true,
  updateStrategy: 'merge',
};

const mapStudios = (studios: StudiosResponse['studios']) =>
  studios.map(({ roomNumber, ...studio }) => ({
    roomsCount: roomNumber,
    ...studio,
  }));

export const studioListReducer = createReducer(initialState)
  .handleAction(fetchStudiosAsync.success, (state, { payload }) => ({
    ...state,
    studios: [...state.studios, ...mapStudios(payload.studios)],
    hasNext: payload.hasNext,
  }))
  .handleAction(fetchFilterStudiosAsync.request, (state, { payload }) => ({
    ...state,
    updateStrategy: payload.updateStrategy,
  }))
  .handleAction(fetchFilterStudiosAsync.success, (state, { payload }) => ({
    ...state,
    studios: mapStudios(payload.studios),
  }));
