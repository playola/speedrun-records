import {
  GET_RECORDS_REQUEST,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAILURE,
} from './types';

export const getRecords = () => ({
  type: GET_RECORDS_REQUEST,
});

export const getRecordsSuccess = response => ({
  type: GET_RECORDS_SUCCESS,
  response,
});

export const getRecordsFailure = error => ({
  type: GET_RECORDS_FAILURE,
  error,
});
