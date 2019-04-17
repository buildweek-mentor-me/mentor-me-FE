import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {questionsReducer} from './questionsReducer';
import {answersReducer} from './answersReducer';

export default combineReducers({
  authReducer,
  questionsReducer,
  answersReducer
});
