import { createReducer } from 'typesafe-actions';
import { fetchFilterStudiosAsync, fetchStudiosAsync } from './actions';
import { Studios } from './types';

export type ListState = Studios & {
  updateStrategy: 'merge' | 'replace';
};

const initialState: ListState = {
  studios: [],
  hasNext: false,
  updateStrategy: 'merge',
};

export const reducer = createReducer(initialState)
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
    hasNext: payload.hasNext,
  }));
