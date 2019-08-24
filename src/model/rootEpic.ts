import { combineEpics } from 'redux-observable';
import { studiosEpic } from '../features/studios/model/epics';

export const rootEpic = combineEpics(...studiosEpic);
