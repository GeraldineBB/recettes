// import data from 'src/data';

// avec test > list : data > []
export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        list: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
