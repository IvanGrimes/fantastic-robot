import { createReducer } from 'typesafe-actions';
import { fetchStudiosAsync } from './actions';
import { ShortStudio } from './types';

type DataState = {
  studios: ShortStudio[];
};

const initialState: DataState = {
  studios: [],
};

export const dataReducer = createReducer(initialState).handleAction(
  fetchStudiosAsync.success,
  (state, { payload }) => ({
    ...state,
    studios: [...state.studios, ...payload],
  })
);
