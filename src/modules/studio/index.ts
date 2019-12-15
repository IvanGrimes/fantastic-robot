import { combineReducers } from 'redux';
import * as listMap from './features/list-map';
import * as data from './features/data';
import * as details from './features/details';
import * as filters from './features/filters';
import * as list from './features/list';
import * as pages from './pages';

export * from './model/types';

const reducer = combineReducers({
  data: data.dataReducer,
  details: details.studioDetailsReducer,
  filters: filters.studioFiltersReducer,
  list: list.studioListReducer,
  listMap: listMap.studioMapListReducer,
});

const saga = [
  ...data.dataSaga,
  ...details.studioDetailsSaga,
  ...filters.studioFiltersSaga,
  ...list.studioListSaga,
];

const rootAction = {
  filters: filters.actions,
  listMap: listMap.actions,
  data: data.actions,
  details: details.actions,
  list: list.actions,
};

export {
  reducer,
  saga,
  pages,
  rootAction,
  data,
  details,
  filters,
  list,
  listMap,
};
