import { combineEpics } from 'redux-observable';
import { studioDataEpic } from '../features/studioData/model/epic';
import { studioListEpic } from '../features/studioList/model/epics';
import { studioFiltersEpic } from '../features/studioFilters/model/epics';

export const rootEpic = combineEpics(
  ...studioDataEpic,
  ...studioFiltersEpic,
  ...studioListEpic,
  ...studioFiltersEpic
);
