import {
  FETCH_QUESTIONS_START,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  FILTER_QUESTION,
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
  DELETE_QUESTION_START,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  EDIT_QUESTION_START,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_FAILURE
} from '../actions';

const initialState = {
  questions: [],
  deletingQuestion: false,
  addingQuestion: false,
  isFetching: false,
  filteredQuestions: [],
  errors: null,
  isEditing: false,
  edited: false
};

export const questionsReducer = (state = initialState, action) => {
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
    case DELETE_QUESTION_START:
      return {
        ...state,
        error: null,
        deletingQuestion: true
      };
    case DELETE_QUESTION_SUCCESS:
      console.log(state.questions);
      return {
        ...state,
        questions: state.questions.filter(q => q.id !== action.payload),
        error: null,
        deletingQuestion: false
      };

    case DELETE_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingQuestion: false
      };
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
    case FILTER_QUESTION:
      return {
        ...state,
        filteredQuestions: state.questions.filter(question => {
          return question.title.includes(action.payload);
        })
      };
    case EDIT_QUESTION_START:
      return {
        ...state,
        isEditing: true,
        error: null,
        edited: false
      };
    case EDIT_QUESTION_SUCCESS:
      return {
        ...state,
        isEditing: false,
        error: null,
        edited: true,
        questions: [...state.questions, action.payload]
      };
    case EDIT_QUESTION_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload,
        edited: false
      };
    default:
      return state;
  }
};
