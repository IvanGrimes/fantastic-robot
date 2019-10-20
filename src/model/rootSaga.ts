import { all } from 'redux-saga/effects';
import { studioDataSaga } from '../features/studioData/model/saga';
import { studioListSaga } from '../features/studioList/model/saga';
import { studioFiltersSaga } from '../features/studioFilters/model/saga';
import { studioDetailsSaga } from '../features/studioDetails/model/saga';

export function* rootSaga() {
  yield all([
    ...studioDataSaga,
    ...studioListSaga,
    ...studioFiltersSaga,
    ...studioDetailsSaga,
  ]);
}
