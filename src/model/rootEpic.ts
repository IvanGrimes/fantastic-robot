import { combineEpics } from 'redux-observable';
import { studioListEpic } from '../features/studioList/model/epics';
import { studioFiltersEpic } from '../features/studioFilters/model/epics';

export const rootEpic = combineEpics(
  ...studioFiltersEpic,
  ...studioListEpic,
  ...studioFiltersEpic
);
