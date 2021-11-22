// import data from 'src/data';

// avec test > list : data > []
export const initialState = {
  list: [],
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
    default:
      return state;
  }
};

export default reducer;
