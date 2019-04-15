import {LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE} from '../actions';

const intialState = {
  logingOut: false,
  isLoggedOut: false,
  error: null
};

export const logoutReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGOUT_START:
      return {
        ...state,
        logingOut: true,
        isLoggedOut: false,
        error: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logingOut: false,
        isLoggedOut: true,
        error: null
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logingOut: false,
        isLoggedOut: false,
        error: action.payload
      };
    default:
      return state;
  }
};
