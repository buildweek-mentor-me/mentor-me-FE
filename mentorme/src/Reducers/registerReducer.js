import {REG_START, REG_SUCCESS, REG_FAILURE} from '../actions';

const initialState = {
  registering: false,
  error: null,
  isRegistered: false
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
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
