import data from 'src/data';

export const initialState = {
  list: data,
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
