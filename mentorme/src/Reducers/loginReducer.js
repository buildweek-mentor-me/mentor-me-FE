import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions';

const initialState = {
  logingIn: false,
  error: null,
  isAuthenticated: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        logingIn: true,
        isAuthenticated: false,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logingIn: false,
        isAuthenticated: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logingIn: false,
        isAuthenticated: false,
        error: action.payload
      };
    default:
      return state;
  }
};
