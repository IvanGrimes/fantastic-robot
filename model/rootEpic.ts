import { combineEpics } from 'redux-observable';
import * as shared from '@shared';
import * as catalog from '@modules/catalog';

export const rootEpic = combineEpics(shared.epic, catalog.epic);
