import {FILTER_QUESTION} from '../actions';

const initialState = {
  questions: [],
  filteredQuestions: []
};

export const filterQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_QUESTION:
      return {
        ...state,
        filteredQuestions: state.questions.filter(question => {
          return question.title.includes(action.payload);
        })
      };
    default:
      return state;
  }
};
