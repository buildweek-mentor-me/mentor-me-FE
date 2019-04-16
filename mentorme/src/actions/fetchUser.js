import axiosWithAuth from '../utils/axiosAuth';
import {FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from '.';

export const fetchUser = id => dispatch => {
  dispatch({type: FETCH_USER_START});

  axiosWithAuth()
    .get('https://mentor-mee.herokuapp.com/users/', id)
    .then(res =>
      dispatch({type: FETCH_USER_SUCCESS, payload: res.data.user.id})
    )
    .catch(err =>
      dispatch({type: FETCH_USER_FAILURE, payload: err.response.message})
    );
};
