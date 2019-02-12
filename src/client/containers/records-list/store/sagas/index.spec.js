import { testSaga } from 'redux-saga-test-plan';
import { fork } from 'redux-saga/effects';
import { getRecords as getRecordsService } from '../../../../services/speedrun';
import root, { getRecords, watchGetRecords } from './index';
import { getRecordsSuccess, getRecordsFailure } from '../actions';
import {
  GET_RECORDS_REQUEST,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAILURE,
} from '../actions/types';

describe('Records list saga', () => {
  const response = {
    data: {
      data: [{ name: 'foo' }, { name: 'boo' }],
    },
  };
  const errorMessage = '404 not found';

  it('getRecords success', () => {
    const result = {
      type: GET_RECORDS_SUCCESS,
      response: response.data.data,
    };
    testSaga(getRecords)
      .next()
      .call(getRecordsService)
      .next(response)
      .put(getRecordsSuccess(response.data.data))
      .next(result)
      .isDone();
  });

  it('getRecords error', () => {
    const error = {
      type: GET_RECORDS_FAILURE,
      error: errorMessage,
    };
    testSaga(getRecords)
      .next()
      .throw(errorMessage)
      .put(getRecordsFailure(errorMessage))
      .next(error)
      .isDone();
  });

  it('watchGetRecords', () => {
    testSaga(watchGetRecords)
      .next()
      .takeLatestEffect(GET_RECORDS_REQUEST, getRecords)
      .finish()
      .isDone();
  });

  it('root', () => {
    testSaga(root)
      .next()
      .all([fork(watchGetRecords)])
      .next()
      .isDone();
  });
});
