import { LIST_ACTIONS, MENU_ACTIONS } from '../consts';
import { getReview } from '../api/vida';

export const menuActions = {
  clickMenu,
};

function clickMenu(item) {
  return (dispatch) => {
    dispatch(request({ item }));

    if (item.name === '상품 권한') {
      getReview()
        .then((data) => {
          dispatch(success(data));
        })
        .catch((error) => {
          dispatch(failure(item));
        });
    }
  };

  function request() { return { type: MENU_ACTIONS.MENU_REQUEST, item }; }
  function success(data) { return { type: MENU_ACTIONS.MENU_SUCCESS, data }; }
  function failure() { return { type: MENU_ACTIONS.MENU_FAILURE, item }; }
}
