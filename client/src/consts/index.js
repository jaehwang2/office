// Menu state
export const MENU_ITEMS = {
  items: {
    menu1: {
      name: '상품 권한',
    },
    menu2: {
      name: '(구)세션 토큰 발급',
    },
    menu3: {
      name: 'JWT토큰 발급',
    },
  },
  views: {},
  loading: false,
  loaded: false,
};

// User Action
export const USER_ACTIONS = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE',
};

// Menu Action
export const MENU_ACTIONS = {
  MENU_REQUEST: 'MENU_REQUEST',
  MENU_SUCCESS: 'MENU_SUCCESS',
  MENU_FAILURE: 'MENU_FAILURE',
};

// Alert Action
export const ALERT_ACTIONS = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR',
};
