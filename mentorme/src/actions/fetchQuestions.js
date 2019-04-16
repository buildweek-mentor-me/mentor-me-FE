import axiosWithAuth from '../utils/axiosAuth';
import {
  FETCH_QUESTIONS_START,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from '.';

export const fetchQuestions = () => dispatch => {
  dispatch({type: FETCH_QUESTIONS_START});

  axiosWithAuth()
    .get('https://mentor-mee.herokuapp.com/questions')
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_QUESTIONS_SUCCESS, payload: res.data});
    })
    .catch(err =>
      dispatch({type: FETCH_QUESTIONS_FAILURE, payload: err.response})
    );
};

// export const fetchQuestions = () => dispatch => {
//   dispatch({type: FETCH_QUESTIONS_START});

//   axiosWithAuth()
//     .get('http://localhost:5000/api/questions')
//     .then(res => {
//       console.log(res);
//       dispatch({type: FETCH_QUESTIONS_SUCCESS, payload: res.data});
//     })
//     .catch(err =>
//       dispatch({type: FETCH_QUESTIONS_FAILURE, payload: err.response})
//     );
// };
