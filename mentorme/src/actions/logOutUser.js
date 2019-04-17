import {LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE} from '.';

export const logOutUser = () => dispatch => {
  dispatch({type: LOGOUT_START});

  localStorage
    .clear()
    .then(() => {
      dispatch({type: LOGOUT_SUCCESS});
    })
    .catch(err => dispatch({type: LOGOUT_FAILURE, payload: err.message}));
};
