import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { initializeAsync, signOut } from './actions';
import { getToken, removeToken } from '../utils/token';

function* initializeFlow() {
  const token = yield call(getToken);
  const isAuth = Boolean(token);

  yield put(initializeAsync.success({ isAuth }));
}

function* signOutFlow() {
  yield call(removeToken);
}

export const saga = [
  takeLatest(getType(initializeAsync.request), initializeFlow),
  takeLatest(getType(signOut), signOutFlow),
];
