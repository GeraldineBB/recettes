// import { CHANGE_FIELD } from '../actions';
import {
  LOGOUT, SET_CURRENT_USER, CHANGE_USER_FIELD,
} from '../actions/user';

export const initialState = {
  logged: false,
  // on prépare deux emplacements dans le state pour stocker l'email et le mdp
  email: '',
  password: '',
  pseudo: null,
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        pseudo: null,
        token: null,
        email: '',
        password: '',
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        // on met à jour les info du state
        // on passe logged à true >
        logged: action.user.logged,
        pseudo: action.user.pseudo,
        token: action.user.token,
      };
    default:
      return state;
  }
};

export default reducer;
