import axios from 'axios';
import {LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE} from '.';

export const logOutUser = () => dispacth => {
  dispacth({type: LOGOUT_START});

  axios
    .post('http://localhost:5000/login')
    .then(() => {
      localStorage.removeItem('token');
      dispacth({type: LOGOUT_SUCCESS});
    })
    .catch(err => dispacth({type: LOGOUT_FAILURE, payload: err.repsonse}));
};
