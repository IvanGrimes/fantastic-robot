import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { fetchFilterStudiosAsync, fetchStudiosAsync } from './actions';
import { fetchFilterStudios, fetchStudios } from './services';
import { getFilters } from '../../studioFilters/model/selectors';
import { getNonEmptyValues } from '../../studioFilters/utils/getNonEmptyValues';

function* fetchStudiosFlow(
  action: ReturnType<typeof fetchStudiosAsync.request>
) {
  const { payload } = action;

  try {
    const data = yield call(fetchStudios, payload);

    yield put(fetchStudiosAsync.success(data));
  } catch (e) {
    yield put(fetchStudiosAsync.failure(e));
  }
}

function* fetchFilterStudiosFlow(
  action: ReturnType<typeof fetchFilterStudiosAsync.request>
) {
  const {
    payload: { updateStrategy, ...payload },
  } = action;
  const filters = yield select(getFilters);
  const injectedFilters = { ...payload, ...filters };
  const params = getNonEmptyValues<typeof injectedFilters>(injectedFilters);

  try {
    const data = yield call(fetchFilterStudios, params);

    yield put(fetchFilterStudiosAsync.success(data));
  } catch (e) {
    yield put(fetchFilterStudiosAsync.failure(e));
  }
}

export const studioListSaga = [
  takeLatest(getType(fetchStudiosAsync.request), fetchStudiosFlow),
  takeLatest(getType(fetchFilterStudiosAsync.request), fetchFilterStudiosFlow),
];
