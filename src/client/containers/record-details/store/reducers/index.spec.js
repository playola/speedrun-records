import {
  GET_RECORD_DETAILS_REQUEST,
  GET_RECORD_DETAILS_SUCCESS,
  GET_RECORD_DETAILS_FAILURE,
  GET_PLAYER_INFORMATION_REQUEST,
  GET_PLAYER_INFORMATION_SUCCESS,
  GET_PLAYER_INFORMATION_FAILURE,
} from '../actions/types';
import recordDetailsReducer from './index';

const initialState = {
  recordDetails: {},
  playerInformation: {},
  loading: false,
  error: null,
};

const recordDetailsMock = {};
const playerInformationMock = {};

describe('recordDetailsReducer', () => {
  it('should return initial state when action is undefined', () => {
    expect(recordDetailsReducer(initialState, 'default')).toEqual(initialState);
  });

  it('should return correct state when GET_RECORD_DETAILS_REQUEST action is called', () => {
    const action = {
      type: GET_RECORD_DETAILS_REQUEST,
    };
    expect(recordDetailsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return correct state when GET_RECORD_DETAILS_SUCCESS action is called', () => {
    const action = {
      type: GET_RECORD_DETAILS_SUCCESS,
      response: recordDetailsMock,
    };

    expect(recordDetailsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      recordDetails: action.response,
    });
  });

  it('should return correct state when GET_RECORD_DETAILS_FAILURE action is called', () => {
    const action = {
      type: GET_RECORD_DETAILS_FAILURE,
      error: {
        code: 400,
      },
    };

    expect(recordDetailsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.error,
    });
  });

  it('should return correct state when GET_PLAYER_INFORMATION_REQUEST action is called', () => {
    const action = {
      type: GET_PLAYER_INFORMATION_REQUEST,
    };
    expect(recordDetailsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return correct state when GET_PLAYER_INFORMATION_SUCCESS action is called', () => {
    const action = {
      type: GET_PLAYER_INFORMATION_SUCCESS,
      response: playerInformationMock,
    };

    expect(recordDetailsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      playerInformation: action.response,
    });
  });

  it('should return correct state when GET_PLAYER_INFORMATION_FAILURE action is called', () => {
    const action = {
      type: GET_PLAYER_INFORMATION_FAILURE,
      error: {
        code: 400,
      },
    };

    expect(recordDetailsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.error,
    });
  });
});
