import {
  put, takeLatest, fork, all, call,
} from 'redux-saga/effects';
import { getRecordDetails as getRecordDetailsService } from '../../../../services/speedrun';
import { GET_RECORD_DETAILS_REQUEST } from '../actions/types';
import {
  getRecordDetailsSuccess,
  getRecordDetailsFailure,
} from '../actions';

export function* getRecordDetails(payload) {
  try {
    const response = yield call(getRecordDetailsService, payload.id);
    yield put(getRecordDetailsSuccess(response.data.data));
  } catch (err) {
    yield put(getRecordDetailsFailure(err));
  }
}

export function* watchGetRecordDetails() {
  yield takeLatest(GET_RECORD_DETAILS_REQUEST, getRecordDetails);
}

export default function* root() {
  yield all([
    fork(watchGetRecordDetails),
  ]);
}
