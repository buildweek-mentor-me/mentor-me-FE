import axios from 'axios';
import {REG_START, REG_SUCCESS, REG_FAILURE} from '.';

export const regUser = creds => dispatch => {
  dispatch({type: REG_START});
  console.log(creds);
  return axios
    .post('http://localhost:5000/auth/register', creds)

    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({type: REG_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type: REG_FAILURE, payload: err}));
};
