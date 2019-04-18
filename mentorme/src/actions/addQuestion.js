import axiosWithAuth from '../utils/axiosAuth';
import {
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE
} from '.';

const URL = 'https://mentor-mee.herokuapp.com/questions';
// const LOCAL_URL = 'http://localhost:5000/api/questions';

export const addQuestion = question => dispatch => {
  dispatch({type: ADD_QUESTION_START});

  return axiosWithAuth()
    .post(URL, question)
    .then(res => dispatch({type: ADD_QUESTION_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADD_QUESTION_FAILURE, payload: err.message}));
};

// export const addQuestion = question => dispatch => {
//   dispatch({type: ADD_QUESTION_START});
//   console.log(question);
//   return axiosWithAuth()
//     .post(LOCAL_URL, question)
//     .then(res => dispatch({type: ADD_QUESTION_SUCCESS, payload: res.data}))
//     .catch(err => dispatch({type: ADD_QUESTION_FAILURE, payload: err.message}));
// };
