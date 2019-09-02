import { createReducer } from 'typesafe-actions';
import { fetchStudiosAsync, toggleFavoriteAsync } from './actions';
import { ShortStudio } from './types';

export type StudioListState = {
  list: ShortStudio[];
  listUpdateType: 'merge' | 'replace';
  hasNext: boolean;
  isFiltering: boolean;
  favorite: {
    [key: string]: {
      loading?: boolean;
      error?: any;
    };
  };
};

const initialState: StudioListState = {
  list: [],
  listUpdateType: 'replace',
  hasNext: false,
  isFiltering: false,
  favorite: {},
};

export const studioListReducer = createReducer(initialState)
  .handleAction(fetchStudiosAsync.request, (state, { payload }) => ({
    ...state,
    listUpdateType: payload.listUpdateType || 'merge',
    isFiltering: Boolean(payload.isFiltering),
  }))
  .handleAction(fetchStudiosAsync.success, (state, { payload }) => ({
    ...state,
    list:
      state.listUpdateType === 'merge'
        ? [...state.list, ...payload.studios]
        : payload.studios,
    hasNext: payload.hasNext,
  }))
  .handleAction(toggleFavoriteAsync.request, (state, { payload }) => ({
    ...state,
    favorite: {
      ...state.favorite,
      [payload]: {
        loading: true,
        error: '',
      },
    },
    list: state.list.map(studio =>
      studio.id === payload ? { ...studio, favorite: !studio.favorite } : studio
    ),
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
      ...state.favorite,
      [payload.id]: {
        loading: false,
      },
    },
    list: state.list.map(studio =>
      studio.id === payload.id
        ? { ...studio, favorite: !studio.favorite }
        : studio
    ),
  }));
