import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {questionsReducer} from './questionsReducer';

export default combineReducers({
  authReducer,
  questionsReducer
});
