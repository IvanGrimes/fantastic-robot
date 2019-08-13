import { createReducer } from 'typesafe-actions';
import {
  fetchFiltersAsync,
  fetchStudiosAsync,
  setFilters,
  toggleFavoriteAsync,
} from './actions';
import { PriceSegment, ShortStudio, Station, StudioType } from './types';

export type StudiosState = {
  studios: {
    list: ShortStudio[];
    listUpdateType: 'merge' | 'replace';
    hasNext: boolean;
  };
  filters: {
    applied: {
      name?: string;
      typeIds: string[];
      priceSegments: PriceSegment[];
      roomsCount: {
        from?: number;
        to?: number;
      };
      favorite?: boolean;
      stationIds: string[];
    };
    data: {
      stations: Station[];
      types: StudioType[];
      priceSegments: PriceSegment[];
      roomsCount: {
        from: number;
        to: number;
      };
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
  },
  filters: {
    applied: {
      roomsCount: {},
      stationIds: [],
      typeIds: [],
      priceSegments: [],
    },
    data: {
      stations: [],
      types: [],
      priceSegments: [1, 2, 3],
      roomsCount: {
        from: 0,
        to: 0,
      },
    },
  },
  favorite: {},
};

export const studiosReducer = createReducer(initialState)
  .handleAction(fetchStudiosAsync.request, (state, { payload }) => ({
    ...state,
    studios: {
      ...state.studios,
      listUpdateType: payload.listUpdateType || 'merge',
    },
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
    const { roomsCount } = state.filters.applied;

    return {
      ...state,
      filters: {
        ...state.filters,
        applied: {
          ...state.filters.applied,
          ...payload,
          typeIds: payload.typeIds.length
            ? [...state.filters.applied.typeIds, ...payload.typeIds]
            : [],
          roomsCount: payload.roomsCount
            ? { ...roomsCount, ...payload.roomsCount }
            : roomsCount,
        },
      },
    };
  })
  .handleAction(fetchFiltersAsync.success, (state, { payload }) => ({
    ...state,
    filters: {
      ...state.filters,
      data: payload,
    },
  }));
