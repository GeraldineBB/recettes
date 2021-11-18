export const SET_DATA = 'SET_DATA';

export const setData = (value) => ({
  type: SET_DATA,
  value,
});

export const LOAD_RECIPES_FROM_API = 'LOAD_RECIPES_FROM_API';

export const loadRecipesFromAPI = () => ({
  type: LOAD_RECIPES_FROM_API,

});
