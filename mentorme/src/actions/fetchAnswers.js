import axiosWithAuth from '../utils/axiosAuth';

import {
  FETCH_ANSWERS_START,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_FAILURE
} from '.';

export const fetchAnswers = id => dispatch => {
  dispatch({type: FETCH_ANSWERS_START});

  axiosWithAuth()
    .get(`https://mentor-mee.herokuapp.com/questions/${id}`)
    .then(res =>
      dispatch({type: FETCH_ANSWERS_SUCCESS, payload: res.data.answers})
    )
    .catch(err =>
      dispatch({type: FETCH_ANSWERS_FAILURE, payload: err.message})
    );
};
