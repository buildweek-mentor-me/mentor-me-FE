import axios from 'axios';
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '.';

export const logUser = creds => dispatch => {
  dispatch({type: LOGIN_START});
<<<<<<< HEAD
  
=======
>>>>>>> 227ebcb423522a01d2d358ca1c12e84a8ee4a8f7

  return axios
    .post('https://mentor-mee.herokuapp.com/auth/login', creds)
    .then(res => {
      dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
      localStorage.setItem('token', res.data.token);
<<<<<<< HEAD
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('handle', creds.handle);
=======
>>>>>>> 227ebcb423522a01d2d358ca1c12e84a8ee4a8f7
    })
    .catch(err => dispatch({type: LOGIN_FAILURE, payload: err}));
};

// export const logUser = creds => dispatch => {
//   dispatch({type: LOGIN_START});

//   return axios
//     .post('http://localhost:5000/api/signin', creds)
//     .then(res => {
//       localStorage.setItem(
//         'token',
//         'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ'
//       );
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload:
//           'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ'
//       });
//     })
//     .catch(err => dispatch({type: LOGIN_FAILURE, payload: err}));
// };
