import {
  FETCH_ANSWERS_START,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_FAILURE,
  ADD_ANSWER_START,
  ADD_ANSWER_SUCCESS,
  ADD_ANSWER_FAILURE,
  EDIT_ANSWER_START,
  EDIT_ANSWER_SUCCESS,
  EDIT_ANSWER_FAILURE,
  DELETE_ANSWER_START,
  DELETE_ANSWER_SUCCESS,
  DELETE_ANSWER_FAILURE
} from '../actions';

const initialState = {
  answers: [],
  deletingAnswer: false,
  addingAnswer: false,
  isFetching: false,
  errors: null,
  isEditing: false,
  edited: false
};

export const answersReducer = (state = initialState, action) => {
  switch (action.payload) {
    case FETCH_ANSWERS_START:
      return {
        ...state,
        isFetching: true,
        errors: null,
        answers: []
      };
    case FETCH_ANSWERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: null,
        answers: action.payload
      };
    case FETCH_ANSWERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
        answers: []
      };
    case ADD_ANSWER_START:
      return {
        ...state,
        addingAnswer: true,
        errors: null,
        answers: state.answers
      };
    case ADD_ANSWER_SUCCESS:
      const newAnswer = {
        id: action.payload.id,
        body: action.payload.body,
        timestamp: action.payload.timestamp,
        author: action.payload.author,
        likes: action.payload.likes
      };
      return {
        ...state,
        answers: [...state.answers, newAnswer],
        error: null,
        addingAnswer: false
      };
    case ADD_ANSWER_FAILURE:
      return {
        ...state,
        error: action.payload,
        answers: state.answers,
        addingAnswer: false
      };
    case DELETE_ANSWER_START:
      return {
        ...state,
        deletingAnswer: true,
        error: null
      };
    case DELETE_ANSWER_SUCCESS:
      return {
        ...state,
        deletingAnswer: false,
        answers: state.answers.filter(a => a.id === action.payload),
        error: null
      };
    case DELETE_ANSWER_FAILURE:
      return {
        ...state,
        deletingAnswer: false,
        answer: state.answer,
        error: action.payload
      };
    default:
      return state;
  }
};
