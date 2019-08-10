import { createReducer } from 'typesafe-actions';
import { fetchStudiosAsync, toggleFavoriteAsync } from './actions';
import { ShortStudio } from './types';

type StudiosState = {
  studios: {
    list: ShortStudio[];
    hasNext: boolean;
  };
  favorite: {
    [key: string]: {
      loading?: boolean;
      error?: any;
    };
  };
};

const initialState: StudiosState = {
  studios: {
    list: [],
    hasNext: true,
  },
  favorite: {},
};

export const studiosReducer = createReducer(initialState)
  .handleAction(fetchStudiosAsync.success, (state, { payload }) => ({
    ...state,
    studios: {
      list: [...state.studios.list, ...payload.studios],
      hasNext: payload.hasNext,
    },
  }))
  .handleAction(toggleFavoriteAsync.request, (state, { payload }) => ({
    ...state,
    favorite: {
      [payload]: {
        loading: true,
        error: '',
      },
    },
    studios: {
      ...state.studios,
      list: state.studios.list.map(studio =>
        studio.id === payload
          ? { ...studio, favorite: !studio.favorite }
          : studio
      ),
    },
  }))
  .handleAction(toggleFavoriteAsync.success, (state, { payload }) => ({
    ...state,
    favorite: {
      ...state.favorite,
      [payload]: {
        loading: false,
      },
    },
  }))
  .handleAction(toggleFavoriteAsync.failure, (state, { payload }) => ({
    ...state,
    favorite: {
      [payload.id]: {
        loading: false,
      },
    },
    studios: {
      ...state.studios,
      list: state.studios.list.map(studio =>
        studio.id === payload.id
          ? { ...studio, favorite: !studio.favorite }
          : studio
      ),
    },
  }));
