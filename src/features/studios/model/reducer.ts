import { createReducer } from 'typesafe-actions';
import {
  clearFilters,
  fetchFiltersAsync,
  fetchStudiosAsync,
  setFilters,
  setStudioMapPreview,
  toggleFavoriteAsync,
} from './actions';
import { PriceSegment, ShortStudio, Station, StudioType } from './types';
// TODO: Split studios feature into studiosList, studiosMap, studiosFilter
export type StudiosState = {
  studios: {
    list: ShortStudio[];
    listUpdateType: 'merge' | 'replace';
    hasNext: boolean;
    isFiltering: boolean;
  };
  filters: {
    applied: {
      name: string;
      typeIds: string[];
      priceSegments: PriceSegment[];
      favorite?: boolean;
      stationIds: string[];
    };
    data: {
      stations: Station[];
      types: StudioType[];
      priceSegments: PriceSegment[];
    };
  };
  favorite: {
    [key: string]: {
      loading?: boolean;
      error?: any;
    };
  };
  map: {
    preview: ShortStudio['id'] | null;
  };
};

const getFilterObjectValue = (state: any[], payload?: any[]) => {
  if (typeof payload === 'undefined') {
    return state;
  }

  return state.some(item => payload.includes(item))
    ? state.filter(item => !payload.includes(item))
    : [...state, ...payload];
};

const initialState: StudiosState = {
  studios: {
    list: [],
    listUpdateType: 'replace',
    hasNext: false,
    isFiltering: false,
  },
  filters: {
    applied: {
      name: '',
      stationIds: [],
      typeIds: [],
      priceSegments: [],
    },
    data: {
      stations: [],
      types: [],
      priceSegments: [1, 2, 3],
    },
  },
  favorite: {},
  map: {
    preview: null,
  },
};

export const studiosReducer = createReducer(initialState)
  .handleAction(fetchStudiosAsync.request, (state, { payload }) => ({
    ...state,
    studios: {
      ...state.studios,
      listUpdateType: payload.listUpdateType || 'merge',
      isFiltering: Boolean(payload.isFiltering),
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
    return {
      ...state,
      filters: {
        ...state.filters,
        applied: {
          ...state.filters.applied,
          name:
            typeof payload.name === 'string'
              ? payload.name
              : state.filters.applied.name,
          typeIds: getFilterObjectValue(
            state.filters.applied.typeIds,
            payload.typeIds
          ),
          stationIds: getFilterObjectValue(
            state.filters.applied.stationIds,
            payload.stationIds
          ),
          priceSegments: getFilterObjectValue(
            state.filters.applied.priceSegments,
            payload.priceSegments
          ),
        },
      },
    };
  })
  .handleAction(fetchFiltersAsync.success, (state, { payload }) => ({
    ...state,
    filters: {
      ...state.filters,
      data: { ...state.filters.data, ...payload },
    },
  }))
  .handleAction(clearFilters, state => ({
    ...state,
    filters: {
      ...state.filters,
      applied: state.filters.applied,
    },
  }))
  .handleAction(setStudioMapPreview, (state, { payload }) => ({
    ...state,
    map: {
      ...state.map,
      preview: state.map.preview === payload.id ? null : payload.id,
    },
  }));
