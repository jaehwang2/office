import { ALERT_ACTIONS } from '../consts';

const success = message => ({
  type: ALERT_ACTIONS.SUCCESS,
  message,
});

const error = message => ({
  type: ALERT_ACTIONS.ERROR,
  message,
});

const clear = message => ({
  type: ALERT_ACTIONS.CLEAR,
  message,
});

export const alertActions = {
  success,
  error,
  clear
}
