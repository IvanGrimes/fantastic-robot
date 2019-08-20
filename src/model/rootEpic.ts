import { combineEpics } from 'redux-observable';
import { studiosEpic } from '../features/studios/epics';

export const rootEpic = combineEpics(...studiosEpic);
