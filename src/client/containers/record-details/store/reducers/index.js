import {
  GET_RECORD_DETAILS_REQUEST,
  GET_RECORD_DETAILS_SUCCESS,
  GET_RECORD_DETAILS_FAILURE,
  GET_PLAYER_INFORMATION_REQUEST,
  GET_PLAYER_INFORMATION_SUCCESS,
  GET_PLAYER_INFORMATION_FAILURE,
} from '../actions/types';

const initialState = {
  recordDetails: [],
  playerInformation: {},
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
    case GET_PLAYER_INFORMATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PLAYER_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        playerInformation: response,
      };
    case GET_PLAYER_INFORMATION_FAILURE:
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
