import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { Await } from '@utils/Await';
import { fetchConfig, fetchMetroList } from './services';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

function* fetchMetroListFlow(
  action: ReturnType<typeof fetchMetroListAsync.request>
) {
  const { payload } = action;

  try {
    const data: Await<ReturnType<typeof fetchMetroList>> = yield call(
      fetchMetroList,
      { city: payload.city }
    );

    yield put(fetchMetroListAsync.success({ list: data }));
  } catch (e) {
    yield put(fetchMetroListAsync.failure(e));
  }
}

export function* fetchConfigFlow() {
  try {
    const data: Await<ReturnType<typeof fetchConfig>> = yield call(fetchConfig);

    yield put(fetchConfigAsync.success({ config: data }));
  } catch (e) {
    yield put(fetchConfigAsync.failure(e));
  }
}

export const saga = [
  takeLatest(getType(fetchMetroListAsync.request), fetchMetroListFlow),
  takeLatest(getType(fetchConfigAsync.request), fetchConfigFlow),
];
