import axios from 'axios';

import { LOAD_RECIPES_FROM_API, setData } from '../actions/recipes';
import { HANDLE_LOGIN } from '../actions/user';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES_FROM_API: {
      axios.get('http://localhost:3001/recipes', {
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
    case HANDLE_LOGIN: {
      axios.post('http://localhost:3001/login', {
        email: emailValue,
        password: passwordValue,
      }).then(
        (response) => {
          console.log(response.data);
          store.dispatch(setCurrentUser(response.data.username));
        },
      );
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
