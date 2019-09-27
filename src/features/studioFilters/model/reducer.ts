import { createReducer } from 'typesafe-actions';
import { clearFilters, setFilters } from './actions';
import { FilterStudiosInput } from '../../studioList/model/services';

export type StudioFiltersState = Required<
  Omit<Omit<Omit<FilterStudiosInput, 'page'>, 'city'>, 'size'>
>;

const initialState: StudioFiltersState = {
  bottomRight: '',
  topLeft: '',
  equipments: [],
  interiors: [],
  name: '',
  priceTypes: [],
  stations: [],
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
  .handleAction(setFilters, (state, { payload }) => ({
    ...state,
    name: typeof payload.name === 'string' ? payload.name : state.name,
    stations: getFilterObjectValue(state.stations, payload.stations),
    equipments: getFilterObjectValue(state.equipments, payload.equipments),
    interiors: getFilterObjectValue(state.interiors, payload.interiors),
    priceTypes: getFilterObjectValue(state.priceTypes, payload.priceTypes),
  }))
  .handleAction(clearFilters, () => initialState);
