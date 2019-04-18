import axiosWithAuth from '../utils/axiosAuth';
import {ADD_ANSWER_START, ADD_ANSWER_SUCCESS, ADD_ANSWER_FAILURE} from '.';

const URL = 'https://mentor-mee.herokuapp.com/answers';
export const addAnswer = answer => dispatch => {
  dispatch({type: ADD_ANSWER_START});

  return axiosWithAuth()
    .post(URL, answer)
    .then(res => dispatch({type: ADD_ANSWER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADD_ANSWER_FAILURE, payload: err.message}));
};
