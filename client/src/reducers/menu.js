import { MENU_ACTIONS, MENU_ITEMS } from '../consts';

export default (state = MENU_ITEMS, action) => {
  switch (action.type) {
    case MENU_ACTIONS.MENU_REQUEST:
      return {
        loading: true,
        item: action.item,
      };
    case MENU_ACTIONS.MENU_SUCCESS:
      return {
        loaded: true,
        item: action.user,
      };
    case MENU_ACTIONS.MENU_FAILURE:
      return {};
    default:
      return state;
  }
};
