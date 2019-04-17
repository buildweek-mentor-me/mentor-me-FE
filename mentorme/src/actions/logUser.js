import axios from 'axios';
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '.';

export const logUser = creds => dispatch => {
  dispatch({type: LOGIN_START});
  const url = 'http://localhost:5000'
  return axios
    .post(`${url}/auth/login`, creds)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token);
      dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
    })
    .catch(err => dispatch({type: LOGIN_FAILURE, payload: err}));
};
