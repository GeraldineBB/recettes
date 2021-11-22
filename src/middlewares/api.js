import axios from 'axios';

import { LOAD_RECIPES_FROM_API, setData } from '../actions/recipes';
import { LOGIN, setCurrentUser } from '../actions/user';

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
    case LOGIN: {
      // on a besoin de l'email et password pour transmettre à l'api
      // attention les info sont dans un sous state, on extrait d'abord le state et ensuite les props du state

      const state = store.getState();
      const { user } = state;
      const { email, password } = user;

      axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      }).then(
        (response) => {
          console.log(response.data);
          const userFromApi = response.data;
          // on a besoin d'un payload : met à jour le user, oui mais comment ?
          store.dispatch(setCurrentUser(userFromApi));
        },
      ).catch(
        () => console.log('erreur'),
      );

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
