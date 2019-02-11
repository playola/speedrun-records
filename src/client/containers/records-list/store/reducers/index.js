import {
  GET_RECORDS_REQUEST,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAILURE,
} from '../actions/types';

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const recordsListReducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case GET_RECORDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RECORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: response,
      };
    case GET_RECORDS_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default recordsListReducer;
