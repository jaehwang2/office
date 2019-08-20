import { combineReducers } from 'redux';
import alert from './alert';
import user from './user';
import authentication from './authentication';
import menu from './menu';

const rootReducer = combineReducers({
  alert,
  user,
  authentication,
  menu,
});

export default rootReducer;
