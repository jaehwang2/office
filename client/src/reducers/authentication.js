import { USER_ACTIONS } from '../consts';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTIONS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case USER_ACTIONS.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case USER_ACTIONS.LOGIN_FAILURE:
      return {};
    case USER_ACTIONS.LOGOUT:
      return {};
    default:
      return state;
  }
};
