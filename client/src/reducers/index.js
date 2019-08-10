import { combineReducers } from 'redux';
import list from './list';
import alert from './alert';
import user from './user';
import authentication from './authentication';

const rootReducer = combineReducers({
  list, // shorthand for lists: lists
  alert,
  user,
  authentication,
});

export default rootReducer;
