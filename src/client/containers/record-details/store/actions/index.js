import {
  GET_RECORD_DETAILS_REQUEST,
  GET_RECORD_DETAILS_SUCCESS,
  GET_RECORD_DETAILS_FAILURE,
  GET_PLAYER_INFORMATION_REQUEST,
  GET_PLAYER_INFORMATION_SUCCESS,
  GET_PLAYER_INFORMATION_FAILURE,
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

export const getPlayerInformation = id => ({
  type: GET_PLAYER_INFORMATION_REQUEST,
  id,
});

export const getPlayerInformationSuccess = response => ({
  type: GET_PLAYER_INFORMATION_SUCCESS,
  response,
});

export const getPlayerInformationFailure = error => ({
  type: GET_PLAYER_INFORMATION_FAILURE,
  error,
});
