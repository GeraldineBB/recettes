// import data from 'src/data';
import { SAVE_FAVORITES } from '../actions/recipes';

// avec test > list : data > []
export const initialState = {
  list: [],
  // liste des recettes favorites:
  favorites: [],
  // au démarrage on est en train de charger
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        list: action.value,
        // on a chargé les données, on est plus en loading
        loading: false,
      };
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return state;
  }
};

export default reducer;
