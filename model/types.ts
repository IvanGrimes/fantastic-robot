import { ActionType, StateType } from 'typesafe-actions';
import * as shared from '@shared';
import * as catalog from '@modules/catalog';
import { Epic } from 'redux-observable';
import { rootReducer } from './rootReducer';

const actions = {
  shared: shared.actions,
  catalog: catalog.actions,
};

type RootActionType = ActionType<typeof actions>;
type RootStateType = StateType<typeof rootReducer>;

declare global {
  type RootState = RootStateType;
  type RootAction = RootActionType;
  type RootEpic = Epic<RootAction, RootAction, RootState>;
}

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
    RootState: RootState;
  }
}
