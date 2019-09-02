import { createReducer } from 'typesafe-actions';
import {
  clearFilters,
  fetchFiltersAsync,
  setFilters,
  setStudioMapPreview,
} from './actions';
import {
  PriceSegment,
  ShortStudio,
  Station,
  StudioType,
} from '../../studioList/model/types';

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
