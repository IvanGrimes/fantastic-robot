import { combineEpics } from 'redux-observable';
import { studiosEpic } from '../features/studios/model/epics';
import { studioListEpic } from '../features/studioList/model/epics';

export const rootEpic = combineEpics(...studiosEpic, ...studioListEpic);
