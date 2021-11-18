export const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const HANDLE_LOGIN = 'HANDLE_LOGIN';

export const handleLogin = () => ({
  type: HANDLE_LOGIN,

});

export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,

});

// onChange ??
export const ON_CHANGE = 'ON_CHANGE';

export const onChange = (value, name) => ({
  type: ON_CHANGE,
  value,
  name,
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});
