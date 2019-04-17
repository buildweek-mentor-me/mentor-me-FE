import axiosWithAuth from '../utils/axiosAuth';
import {
  EDIT_QUESTION_START,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_FAILURE
} from '.';

const URL = 'https://mentor-mee.herokuapp.com/questions';

export const editQuestion = id => dispatch => {
  dispatch({type: EDIT_QUESTION_START});

  axiosWithAuth()
    .put(`${URL}/${id}`)
    .then(res => dispatch({type: EDIT_QUESTION_SUCCESS, payload: res.data}))
    .catch(err =>
      dispatch({type: EDIT_QUESTION_FAILURE, payload: err.message})
    );
};
