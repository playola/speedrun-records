import {
  GET_RECORD_DETAILS_REQUEST,
  GET_RECORD_DETAILS_SUCCESS,
  GET_RECORD_DETAILS_FAILURE,
} from './types';

export const getRecordDetails = id => ({
  type: GET_RECORD_DETAILS_REQUEST,
  id,
});

export const getRecordDetailsSuccess = response => ({
  type: GET_RECORD_DETAILS_SUCCESS,
  response,
});

export const getRecordDetailsFailure = error => ({
  type: GET_RECORD_DETAILS_FAILURE,
  error,
});
