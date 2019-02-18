import {
  put, takeLatest, fork, all, call,
} from 'redux-saga/effects';
import {
  getRecordDetails as getRecordDetailsService,
  getPlayerInformation as getPlayerInformationService,
} from '../../../../services/speedrun';
import { GET_RECORD_DETAILS_REQUEST, GET_PLAYER_INFORMATION_REQUEST } from '../actions/types';
import {
  getRecordDetailsSuccess,
  getRecordDetailsFailure,
  getPlayerInformationSuccess,
  getPlayerInformationFailure,
} from '../actions';

export function* getRecordDetails(payload) {
  try {
    const response = yield call(getRecordDetailsService, payload.id);
    yield put(getRecordDetailsSuccess(response.data.data));
  } catch (err) {
    yield put(getRecordDetailsFailure(err));
  }
}

export function* getPlayerInformation(payload) {
  try {
    const response = yield call(getPlayerInformationService, payload.id);
    yield put(getPlayerInformationSuccess(response.data.data));
  } catch (err) {
    yield put(getPlayerInformationFailure(err));
  }
}

export function* watchGetRecordDetails() {
  yield takeLatest(GET_RECORD_DETAILS_REQUEST, getRecordDetails);
}

export function* watchGetPlayerInformation() {
  yield takeLatest(GET_PLAYER_INFORMATION_REQUEST, getPlayerInformation);
}

export default function* root() {
  yield all([
    fork(watchGetRecordDetails),
    fork(watchGetPlayerInformation),
  ]);
}
