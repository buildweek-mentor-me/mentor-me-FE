import axiosWithAuth from '../utils/axiosAuth';
import {
  UPVOTE_START,
  UPVOTE_SUCCESS,
  UPVOTE_FAILURE
} from '.';

const URL = 'https://mentor-mee.herokuapp.com/questions';

export const upvote = (id) => dispatch => {
  dispatch({type: UPVOTE_START});
  console.log(id);
  axiosWithAuth()
    .put(`${URL}/${id}/like`)

    .then(res => {
      console.log(res.data);
      dispatch({type: UPVOTE_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: UPVOTE_FAILURE, payload: err.message});
    });
};
