import { Store } from 'redux';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { RootAction, RootState } from '../model/types';
import { rootEpic } from '../model/rootEpic';
import { rootApi } from '../model/rootApi';
import rootAction from '../model/rootAction';

export const serverEpic = async (
  store: Store<RootState>,
  action: RootAction
) => {
  const state$ = new StateObservable<RootState>(
    new Subject(),
    store.getState()
  );

  const resultAction = await rootEpic(ActionsObservable.of(action), state$, {
    api: rootApi,
    actions: rootAction,
  }).toPromise();

  store.dispatch(resultAction);
};
