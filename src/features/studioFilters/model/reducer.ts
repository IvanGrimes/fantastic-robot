import { createReducer } from 'typesafe-actions';
import {
  PriceSegment,
  Station,
  StudioType,
} from '../../studioList/model/types';
import { clearFilters, fetchFiltersAsync, setFilters } from './actions';

export type StudioFiltersState = {
  data: {
    stations: Station[];
    types: StudioType[];
    priceSegments: PriceSegment[];
  };
  applied: {
    name: string;
    typeIds: string[];
    priceSegments: PriceSegment[];
    favorite?: boolean;
    stationIds: string[];
  };
};

const initialState: StudioFiltersState = {
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
};

const getFilterObjectValue = (state: any[], payload?: any[]) => {
  if (typeof payload === 'undefined') {
    return state;
  }

  return state.some(item => payload.includes(item))
    ? state.filter(item => !payload.includes(item))
    : [...state, ...payload];
};

export const studioFiltersReducer = createReducer(initialState)
  .handleAction(setFilters, (state, { payload }) => {
    return {
      ...state,
      applied: {
        ...state.applied,
        name:
          typeof payload.name === 'string' ? payload.name : state.applied.name,
        typeIds: getFilterObjectValue(state.applied.typeIds, payload.typeIds),
        stationIds: getFilterObjectValue(
          state.applied.stationIds,
          payload.stationIds
        ),
        priceSegments: getFilterObjectValue(
          state.applied.priceSegments,
          payload.priceSegments
        ),
      },
    };
  })
  .handleAction(fetchFiltersAsync.success, (state, { payload }) => ({
    ...state,
    data: { ...state.data, ...payload },
  }))
  .handleAction(clearFilters, state => ({
    ...state,
    applied: initialState.applied,
  }));
