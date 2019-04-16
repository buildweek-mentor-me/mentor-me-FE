import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions';

const intialState = {
  user: {},
  error: null,
  isFetching: false
};

export const fetchUserReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        user: {},
        error: null,
        isFetching: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isFetching: false
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
