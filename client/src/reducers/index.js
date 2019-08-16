import { combineReducers } from 'redux';
import list from './list';
import alert from './alert';
import user from './user';
import authentication from './authentication';
import menu from './menu';

const rootReducer = combineReducers({
  list, // shorthand for lists: lists
  alert,
  user,
  authentication,
  menu,
});

export default rootReducer;
