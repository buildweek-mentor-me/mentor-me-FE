import axiosWithAuth from '../utils/axiosAuth';

import {
  DELETE_ANSWER_START,
  DELETE_ANSWER_SUCCESS,
  DELETE_ANSWER_FAILURE
} from '.';

export const deleteAnswer = id => dispatch => {
  dispatch({type: DELETE_ANSWER_START});

  axiosWithAuth()
    .delete(`https://mentor-mee.herokuapp.com/answers/${id}`)
    .then(res => {
      console.log(res);
      dispatch({type: DELETE_ANSWER_SUCCESS, payload: id});
    })
    .catch(err =>
      dispatch({type: DELETE_ANSWER_FAILURE, payload: err.message})
    );
};
