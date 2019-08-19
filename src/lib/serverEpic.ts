import { Store } from 'redux';
import { RootAction, RootState } from '../redux/types';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { rootEpic } from '../redux/rootEpic';
import { rootApi } from '../redux/rootApi';
import rootAction from '../redux/rootAction';

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
