import * as redux from 'redux';
import { ActionType, StateType } from 'typesafe-actions';
import { SagaMiddleware } from '@redux-saga/core/types';
import rootAction from './rootAction';
import { rootReducer } from './rootReducer';
import { rootService } from './rootService';

export type RootAction = ActionType<typeof rootAction>;

export type RootState = StateType<typeof rootReducer>;

export type RootApi = typeof rootService;

export type EpicDependencies = {
  api: RootApi;
  actions: typeof rootAction;
};

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

export type CityType = 'moscow';
