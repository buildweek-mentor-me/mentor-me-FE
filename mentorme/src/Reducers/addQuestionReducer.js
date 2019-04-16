import {
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE
} from '../actions';

const initialState = {
  question: [],
  error: null,
  addingQuestion: false
};

export const addQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION_START:
      return {
        ...state,
        question: [],
        error: null,
        addingQuestion: true
      };
    case ADD_QUESTION_SUCCESS:
      const newQuestion = {
        title: action.payload.title,
        id: action.payload.id,
        body: action.payload.body,
        author: action.payload.author,
        FK_user_id: action.payload.FK_user_id
      };
      return {
        ...state,
        question: [...state.question, newQuestion],
        error: null,
        addingQuestion: false
      };
    case ADD_QUESTION_FAILURE:
      return {
        ...state,
        question: [],
        error: action.payload,
        addingQuestion: false
      };
    default:
      return state;
  }
};
