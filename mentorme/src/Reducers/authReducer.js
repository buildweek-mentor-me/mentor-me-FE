import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REG_START,
  REG_SUCCESS,
  REG_FAILURE
} from '../actions';

const initialState = {
  loggingIn: false,
  error: null,
  isAuthenticated: false,
  loggingOut: false,
  registering: false,
  isRegistered: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        isAuthenticated: false,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: false,
        error: action.payload
      };
    case LOGOUT_START:
      return {
        ...state,
        loggingOut: true,
        isAuthenticated: true,
        error: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        isAuthenticated: false,
        error: null
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: false,
        isAuthenticated: true,
        error: action.payload
      };
    case REG_START:
      return {
        ...state,
        registering: true,
        isRegistered: false,
        error: null
      };
    case REG_SUCCESS:
      return {
        ...state,
        registering: false,
        isRegistered: true,
        error: null
      };
    case REG_FAILURE:
      return {
        ...state,
        registering: false,
        isRegistered: false,
        error: action.payload
      };
    default:
      return state;
  }
};
