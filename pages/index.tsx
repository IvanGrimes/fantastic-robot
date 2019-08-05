import React from 'react';
import { Subject } from 'rxjs';
import { StateObservable, ActionsObservable } from 'redux-observable';
import { Store } from 'redux';
import { rootEpic } from '../redux/rootEpic';
import { fetchStudiosAsync } from '../redux/data/actions';
import { RootState } from '../redux/types';
import { rootApi } from "../redux/rootApi";
import rootAction from "../redux/rootAction";

const Index = () => {
  return <div>Hello world!</div>;
};

Index.getInitialProps = async ({ store }: { store: Store<RootState> }) => {
  // TODO: Write helper
  const state$ = new StateObservable<RootState>(
    new Subject(),
    store.getState()
  );
  const resultAction = await rootEpic(
    ActionsObservable.of(fetchStudiosAsync.request()),
    state$,
    { api: rootApi, action: rootAction }
  ).toPromise();

  store.dispatch(resultAction);

  return {};
};

export default Index;
