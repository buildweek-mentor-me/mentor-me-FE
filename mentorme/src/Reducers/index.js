import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {logoutReducer} from './logoutReducer';
import {fecthQuestionsReducer} from './fecthQuestionsReducer';

export default combineReducers({
  loginReducer,
  logoutReducer,
  fecthQuestionsReducer
});
