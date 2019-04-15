import {
  FETCH_QUESTIONS_START,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from '../actions';

const intialState = {
  questions: [],
  errors: null,
  isFetching: false
};

export const fecthQuestionsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_START:
      return {
        ...state,
        questions: [],
        isFetching: true,
        errors: null
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        isFetching: false,
        errors: null
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        questions: [],
        isFetching: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
