import { testSaga } from 'redux-saga-test-plan';
import { fork } from 'redux-saga/effects';
import {
  getRecordDetails as getRecordDetailsService,
  getPlayerInformation as getPlayerInformationService,
} from '../../../../services/speedrun';
import root, {
  getRecordDetails,
  getPlayerInformation,
  watchGetRecordDetails,
  watchGetPlayerInformation,
} from './index';
import {
  getRecordDetailsSuccess,
  getRecordDetailsFailure,
  getPlayerInformationSuccess,
  getPlayerInformationFailure,
} from '../actions';
import {
  GET_RECORD_DETAILS_REQUEST,
  GET_RECORD_DETAILS_SUCCESS,
  GET_RECORD_DETAILS_FAILURE,
  GET_PLAYER_INFORMATION_REQUEST,
  GET_PLAYER_INFORMATION_SUCCESS,
  GET_PLAYER_INFORMATION_FAILURE,
} from '../actions/types';

describe('Record details saga', () => {
  const payload = { id: 'k6qqkx6g' };
  const response = {
    data: {
      data: {
        name: 'foo',
      },
    },
  };
  const errorMessage = '404 not found';

  it('getRecordDetails success', () => {
    const result = {
      type: GET_RECORD_DETAILS_SUCCESS,
      response: response.data.data,
    };
    testSaga(getRecordDetails, payload)
      .next()
      .call(getRecordDetailsService, payload.id)
      .next(response)
      .put(getRecordDetailsSuccess(response.data.data))
      .next(result)
      .isDone();
  });

  it('getRecordDetails error', () => {
    const error = {
      type: GET_RECORD_DETAILS_FAILURE,
      error: errorMessage,
    };
    testSaga(getRecordDetails, payload)
      .next()
      .throw(errorMessage)
      .put(getRecordDetailsFailure(errorMessage))
      .next(error)
      .isDone();
  });

  it('getPlayerInformation success', () => {
    const result = {
      type: GET_PLAYER_INFORMATION_SUCCESS,
      response: response.data.data,
    };
    testSaga(getPlayerInformation, payload)
      .next()
      .call(getPlayerInformationService, payload.id)
      .next(response)
      .put(getPlayerInformationSuccess(response.data.data))
      .next(result)
      .isDone();
  });

  it('getPlayerInformation error', () => {
    const error = {
      type: GET_PLAYER_INFORMATION_FAILURE,
      error: errorMessage,
    };
    testSaga(getPlayerInformation, payload)
      .next()
      .throw(errorMessage)
      .put(getPlayerInformationFailure(errorMessage))
      .next(error)
      .isDone();
  });

  it('watchGetRecordDetails', () => {
    testSaga(watchGetRecordDetails)
      .next()
      .takeLatestEffect(GET_RECORD_DETAILS_REQUEST, getRecordDetails)
      .finish()
      .isDone();
  });

  it('watchGetPlayerInformation', () => {
    testSaga(watchGetPlayerInformation)
      .next()
      .takeLatestEffect(GET_PLAYER_INFORMATION_REQUEST, getPlayerInformation)
      .finish()
      .isDone();
  });

  it('root', () => {
    testSaga(root)
      .next()
      .all([
        fork(watchGetRecordDetails),
        fork(watchGetPlayerInformation),
      ])
      .next()
      .isDone();
  });
});
