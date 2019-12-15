import { put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { fetchFilterStudiosAsync } from '../../list/model/actions';
import { setFilters } from './actions';

function* setFiltersFlow() {
  yield put(
    fetchFilterStudiosAsync.request({
      city: 'moscow',
      page: 1,
      updateStrategy: 'replace',
    })
  );
}

export const studioFiltersSaga = [
  takeLatest(getType(setFilters), setFiltersFlow),
];
