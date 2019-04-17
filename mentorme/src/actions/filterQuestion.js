import {FILTER_QUESTION} from '.';

export const filterQuestion = term => {
  return {
    type: FILTER_QUESTION,
    payload: term
  };
};
