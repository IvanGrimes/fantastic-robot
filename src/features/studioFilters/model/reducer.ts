import { createReducer } from 'typesafe-actions';
import { clearFilters, setFilters } from './actions';
import { FilterStudiosInput } from '../../../controllers/studio/filter';

export type StudioFiltersState = Required<
  Omit<Omit<Omit<FilterStudiosInput, 'page'>, 'city'>, 'size'>
>;

const initialState: StudioFiltersState = {
  bottomRight: '',
  topLeft: '',
  equipments: [],
  interiors: [],
  name: '',
  priceSegments: [],
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
  .handleAction(setFilters, (state, { payload }) => {
    return {
      ...state,
      name: typeof payload.name === 'string' ? payload.name : state.name,
      stations: getFilterObjectValue(state.stations, payload.stations),
      equipments: getFilterObjectValue(state.equipments, payload.equipments),
      interiors: getFilterObjectValue(state.interiors, payload.interiors),
      priceSegments: getFilterObjectValue(
        state.priceSegments,
        payload.priceSegments
      ),
    };
  })
  .handleAction(clearFilters, () => initialState);
