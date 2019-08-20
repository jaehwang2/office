import { ALERT_ACTIONS } from '../consts';

export default (state = {}, action) => {
  switch (action.type) {
    case ALERT_ACTIONS.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case ALERT_ACTIONS.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case ALERT_ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
};
