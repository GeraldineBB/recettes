import axios from 'axios';

import { LOAD_RECIPES_FROM_API, setData } from '../actions/recipes';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES_FROM_API: {
      axios.get('http://localhost:3001/recipes', {
        // email: emailValue,
        // password: passwordValue,
      }).then(
        (response) => {
          console.log(response.data);

          // dispatch d'une action modifier le state avec les données de l'api
          store.dispatch(setData(response.data));
        },
      ).catch(
        (error) => console.log('on a une erreur', error),
      );

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
