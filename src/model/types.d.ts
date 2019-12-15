import { ActionType, StateType } from 'typesafe-actions';
import { SagaMiddleware } from '@redux-saga/core/types';
import rootAction from './rootAction';
import { rootReducer } from './rootReducer';

export type RootAction = ActionType<typeof rootAction>;

export type RootState = StateType<typeof rootReducer>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
    RootState: RootState;
  }
}

declare module 'redux' {
  export interface Store {
    sagaTask: SagaMiddleware;
  }
}
