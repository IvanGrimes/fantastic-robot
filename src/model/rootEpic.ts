import { combineEpics } from 'redux-observable';
import { studiosEpic } from './studios/epics';

export const rootEpic = combineEpics(...studiosEpic);
