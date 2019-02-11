import {
  put, takeLatest, fork, all,
} from 'redux-saga/effects';
import { getRecords as getRecordsService } from '../../../../services/speedrun';
import { GET_RECORDS_REQUEST } from '../actions/types';
import {
  getRecordsSuccess,
  getRecordsFailure,
} from '../actions';

export function* getRecords() {
  try {
    const response = yield getRecordsService();
    console.log('getRecords response', response);
    yield put(getRecordsSuccess(response.data));
  } catch (err) {
    yield put(getRecordsFailure(err));
  }
}

export function* watchGetRecords() {
  yield takeLatest(GET_RECORDS_REQUEST, getRecords);
}

export default function* root() {
  yield all([
    fork(watchGetRecords),
  ]);
}
