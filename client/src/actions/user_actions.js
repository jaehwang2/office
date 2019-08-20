import { userService } from '../service/users';
import Vida from '../api/vida';
import { alertActions } from './';
import { USER_ACTIONS } from '../consts';
import { history } from '../helper/history';

export const userActions = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    const vida = new Vida();
    vida.getReview();
  };

  function request(user) { return { type: USER_ACTIONS.LOGIN_REQUEST, user }; }
  function success(user) { return { type: USER_ACTIONS.LOGIN_SUCCESS, user }; }
  function failure(user) { return { type: USER_ACTIONS.LOGIN_FAILURE, user }; }
}


const logout = () => ({
  type: USER_ACTIONS.LOGOUT,
});
