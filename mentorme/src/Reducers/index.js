import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {logoutReducer} from './logoutReducer';
import {registerReducer} from './registerReducer';
import {fetchQuestionsReducer} from './fetchQuestionsReducer';
import {fetchUserReducer} from './fetchUserReducer';
import {filterQuestionReducer} from './filterQuestionReducer';
import {addQuestionReducer} from './addQuestionReducer';

export default combineReducers({
  registerReducer,
  loginReducer,
  logoutReducer,
  fetchUserReducer,
  fetchQuestionsReducer,
  filterQuestionReducer,
  addQuestionReducer
});
