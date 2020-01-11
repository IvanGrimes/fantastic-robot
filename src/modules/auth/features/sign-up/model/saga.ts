import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { signUpAsync } from './actions';
import { signUp } from './services';

function* signUpFlow({ payload }: ReturnType<typeof signUpAsync.request>) {
  try {
    yield call(signUp, payload);

    yield put(signUpAsync.success());
  } catch (e) {
    yield put(signUpAsync.failure(e));
  }
}

export const saga = [takeLatest(getType(signUpAsync.request), signUpFlow)];
