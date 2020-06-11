import { mockStore } from '@model';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

export const testEpic = <
  E extends RootEpic,
  A extends (...args: any[]) => RootAction,
  F extends (...args: any[]) => RootAction,
  C extends (action: ReturnType<F>) => void
>(
  epic: E,
  action: A,
  filterByAction?: F,
  callback?: C
) => {
  const state = mockStore().getState();
  const state$ = new StateObservable<typeof state>(new Subject(), state);
  const action$ = ActionsObservable.of(action());
  const epic$ = epic(action$, state$, {});

  if (filterByAction && callback) {
    epic$.pipe(filter(isActionOf(filterByAction))).subscribe((a) => {
      callback(a as ReturnType<F>);
    });
  }

  return epic$;
};
