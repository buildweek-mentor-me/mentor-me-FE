import axiosWithAuth from '../utils/axiosAuth';
import {
  EDIT_QUESTION_START,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_FAILURE
} from '.';

const URL = 'https://mentor-mee.herokuapp.com/questions';

export const editQuestion = (id, question) => dispatch => {
  dispatch({type: EDIT_QUESTION_START});
  console.log(id);
  axiosWithAuth()
    .put(`${URL}/${id}`, question)

    .then(res => {
      console.log(res.data);
      dispatch({type: EDIT_QUESTION_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: EDIT_QUESTION_FAILURE, payload: err.message});
    });
};
