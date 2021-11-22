export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';

export const changeUserField = (value, name) => ({
  type: CHANGE_USER_FIELD,
  value,
  name,
});

export const LOGIN = 'LOGIN';

export const login = () => ({
  type: LOGIN,

});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,

});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});
