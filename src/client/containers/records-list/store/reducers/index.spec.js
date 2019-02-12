import {
  GET_RECORDS_REQUEST,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAILURE,
} from '../actions/types';
import recordsListReducer from './index';

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const recordsListMock = [];

describe('recordsListReducer', () => {
  it('should return initial state when action is undefined', () => {
    expect(recordsListReducer(initialState, 'default')).toEqual(initialState);
  });

  it('should return correct state when GET_RECORDS_REQUEST action is called', () => {
    const action = {
      type: GET_RECORDS_REQUEST,
    };
    expect(recordsListReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return correct state when GET_RECORDS_SUCCESS action is called', () => {
    const action = {
      type: GET_RECORDS_SUCCESS,
      response: recordsListMock,
    };

    expect(recordsListReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      records: action.response,
    });
  });

  it('should return correct state when GET_RECORDS_FAILURE action is called', () => {
    const action = {
      type: GET_RECORDS_FAILURE,
      error: {
        code: 400,
      },
    };

    expect(recordsListReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.error,
    });
  });
});
