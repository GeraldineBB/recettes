import axios from 'axios';

import { setData } from '../actions/recipes';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOAD': {
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
