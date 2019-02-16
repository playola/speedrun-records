import {
  GET_RECORD_DETAILS_REQUEST,
  GET_RECORD_DETAILS_SUCCESS,
  GET_RECORD_DETAILS_FAILURE,
} from '../actions/types';

const initialState = {
  recordDetails: [],
  loading: false,
  error: null,
};

const recordsListReducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case GET_RECORD_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RECORD_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        recordDetails: response,
      };
    case GET_RECORD_DETAILS_FAILURE:
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
