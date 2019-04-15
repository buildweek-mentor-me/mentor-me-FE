import axios from 'axios';
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '.';

export const logUser = creds => dispatch => {
  dispatch({type: LOGIN_START});

  return axios
    .post('http://localhost:5000/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type: LOGIN_FAILURE, payload: err.response}));
};
