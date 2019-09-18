import { createReducer } from 'typesafe-actions';
import { fetchStudiosAsync } from './actions';
import { StudiosResponse } from '../../../controllers/studio/types';

export type StudioListState = StudiosResponse;

const initialState: StudioListState = {
  studios: [],
  hasNext: true,
};

export const studioListReducer = createReducer(initialState).handleAction(
  fetchStudiosAsync.success,
  (state, { payload }) => ({
    ...state,
    studios: [...state.studios, ...payload.studios],
    hasNext: payload.hasNext,
  })
);
