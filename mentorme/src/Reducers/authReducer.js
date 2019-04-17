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
  logingIn: false,
  error: null,
  isAuthenticated: false,
  logingOut: false,
  registering: false,
  isRegistered: false
};

export const authReducer = (state = initialState, action) => {
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
    case LOGOUT_START:
      return {
        ...state,
        logingOut: true,
        isAuthenticated: true,
        error: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logingOut: false,
        isAuthenticated: false,
        error: null
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logingOut: false,
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
