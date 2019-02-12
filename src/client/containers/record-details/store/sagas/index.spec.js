import { testSaga } from 'redux-saga-test-plan';
import { fork } from 'redux-saga/effects';
import { getRecordDetails as getRecordDetailsService } from '../../../../services/speedrun';
import root, { getRecordDetails, watchGetRecordDetails } from './index';
import { getRecordDetailsSuccess, getRecordDetailsFailure } from '../actions';
import {
  GET_RECORD_DETAILS_REQUEST,
  GET_RECORD_DETAILS_SUCCESS,
  GET_RECORD_DETAILS_FAILURE,
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

  it('watchGetRecordDetails', () => {
    testSaga(watchGetRecordDetails)
      .next()
      .takeLatestEffect(GET_RECORD_DETAILS_REQUEST, getRecordDetails)
      .finish()
      .isDone();
  });

  it('root', () => {
    testSaga(root)
      .next()
      .all([fork(watchGetRecordDetails)])
      .next()
      .isDone();
  });
});
