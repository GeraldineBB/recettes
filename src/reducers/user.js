// import { CHANGE_FIELD } from '../actions';
import {
  HANDLE_LOGOUT, ON_CHANGE, SET_CURRENT_USER, CHANGE_FIELD,
} from '../actions/user';

export const initialState = {
  isLogged: false,

  emailValue: '',
  passwordValue: '',
  currentUser: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    case ON_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
