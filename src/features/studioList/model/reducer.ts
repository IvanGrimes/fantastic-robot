import { createReducer } from 'typesafe-actions';
import { fetchFilterStudiosAsync, fetchStudiosAsync } from './actions';
import { Studios } from './api';

export type StudioListState = Studios & {
  updateStrategy: 'merge' | 'replace';
};

const initialState: StudioListState = {
  studios: [],
  hasNext: true,
  updateStrategy: 'merge',
};

export const studioListReducer = createReducer(initialState)
  .handleAction(fetchStudiosAsync.success, (state, { payload }) => ({
    ...state,
    studios: [...state.studios, ...payload.studios],
    hasNext: payload.hasNext,
  }))
  .handleAction(fetchFilterStudiosAsync.request, (state, { payload }) => ({
    ...state,
    updateStrategy: payload.updateStrategy,
  }))
  .handleAction(fetchFilterStudiosAsync.success, (state, { payload }) => ({
    ...state,
    studios: payload.studios,
  }));
