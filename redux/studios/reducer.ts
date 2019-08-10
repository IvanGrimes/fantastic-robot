import { createReducer } from 'typesafe-actions';
import { fetchStudiosAsync, setFilters, toggleFavoriteAsync } from './actions';
import { PriceSegment, ShortStudio } from './types';

export type StudiosState = {
  studios: {
    list: ShortStudio[];
    listUpdateType: 'merge' | 'replace';
    hasNext: boolean;
    filters: {
      name?: string;
      typeIds?: string[];
      priceSegment?: PriceSegment[];
      roomsCount: {
        from?: number;
        to?: number;
      };
      favorite?: boolean;
      stationIds?: string[];
    };
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
    listUpdateType: 'replace',
    hasNext: false,
    filters: {
      roomsCount: {},
    },
  },
  favorite: {},
};

export const studiosReducer = createReducer(initialState)
  .handleAction(fetchStudiosAsync.request, (state, { payload }) => ({
    ...state,
    studios: {
      ...state.studios,
      listUpdateType: payload.listUpdateType || "merge",
    }
  }))
  .handleAction(fetchStudiosAsync.success, (state, { payload }) => ({
    ...state,
    studios: {
      ...state.studios,
      list:
        state.studios.listUpdateType === 'merge'
          ? [...state.studios.list, ...payload.studios]
          : payload.studios,
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
  }))
  .handleAction(setFilters, (state, { payload }) => {
    const { roomsCount } = state.studios.filters;

    return {
      ...state,
      studios: {
        ...state.studios,
        filters: {
          ...state.studios.filters,
          roomsCount: payload.roomsCount
            ? { ...roomsCount, ...payload.roomsCount }
            : roomsCount,
        },
      },
    };
  });
