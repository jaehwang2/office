import { MENU_ACTIONS, MENU_ITEMS } from '../consts';

export default (state = MENU_ITEMS, action) => {
  switch (action.type) {
    case MENU_ACTIONS.MENU_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case MENU_ACTIONS.MENU_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        views: action.data,
      };
    case MENU_ACTIONS.MENU_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
};
