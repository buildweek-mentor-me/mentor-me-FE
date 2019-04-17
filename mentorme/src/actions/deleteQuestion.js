import axiosWithAuth from '../utils/axiosAuth';
import {
  DELETE_QUESTION_START,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE
} from '.';

export const deleteQuestion = id => dispatch => {
  dispatch({type: DELETE_QUESTION_START});
  console.log(id);
  return axiosWithAuth()
    .delete(`https://mentor-mee.herokuapp.com/questions/${id}`)
    .then(res => {
      console.log(res);
      dispatch({type: DELETE_QUESTION_SUCCESS, payload: id});
    })
    .catch(err =>
      dispatch({type: DELETE_QUESTION_FAILURE, payload: err.message})
    );
};
