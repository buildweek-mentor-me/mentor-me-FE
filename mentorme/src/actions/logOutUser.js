import axiosWithAuth from '../utils/axiosAuth';
import {LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE} from '.';

export const logOutUser = () => dispatch => {
  dispatch({type: LOGOUT_START});

  return axiosWithAuth()
    .post('https://mentor-mee.herokuapp.com/auth/logout')
    .then(() => {
      localStorage.clear();
      dispatch({type: LOGOUT_SUCCESS});
    })
    .catch(err => dispatch({type: LOGOUT_FAILURE, payload: err.message}));
};
