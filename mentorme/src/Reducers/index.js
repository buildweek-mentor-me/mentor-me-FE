import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {logoutReducer} from './logoutReducer';

export default combineReducers({
  loginReducer,
  logoutReducer
});
