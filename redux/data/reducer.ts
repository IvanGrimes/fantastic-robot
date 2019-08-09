import { createReducer } from 'typesafe-actions';
import { fetchStudiosAsync } from './actions';
import { ShortStudio } from './types';

type DataState = {
  studios: {
    list: ShortStudio[];
    hasNext: boolean;
  };
};

const initialState: DataState = {
  studios: {
    list: [],
    hasNext: true,
  },
};

export const dataReducer = createReducer(initialState).handleAction(
  fetchStudiosAsync.success,
  (state, { payload }) => ({
    ...state,
    studios: {
      list: [...state.studios.list, ...payload.studios],
      hasNext: payload.hasNext,
    },
  })
);
