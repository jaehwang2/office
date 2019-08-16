import { LIST_ACTIONS, MENU_ACTIONS } from '../consts';
import Vida from '../api/api';

export const menuActions = {
  clickMenu,
};

function clickMenu(item) {
  return (dispatch) => {
    dispatch(request({ username }));
    const vida = new Vida();
    vida.getReview();
  };


  function request(item) { return { type: MENU_ACTIONS.MENU_REQUEST, item }; }
  function success(item) { return { type: MENU_ACTIONS.MENU_SUCCESS, item }; }
  function failure(item) { return { type: MENU_ACTIONS.MENU_FAILURE, item }; }
}

const previewItem = name => ({
  type: LIST_ACTIONS.ITEM_PREVIEW,
  name, // shorthand for name: name
});

const viewItem = name => ({
  type: LIST_ACTIONS.ITEM_VIEW,
  name,
});

const addItem = item => ({
  type: LIST_ACTIONS.ITEM_ADD,
  item, // shorthand for item: item
});

const clearItem = () => ({
  type: LIST_ACTIONS.ITEM_CLEAR,
});

export const listActions = {
  previewItem,
  viewItem,
  addItem,
  clearItem,
}
