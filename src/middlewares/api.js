import axios from 'axios';

import {
  GET_FAVORITES_FROM_API, LOAD_RECIPES_FROM_API, setData, saveFavorites,
} from '../actions/recipes';
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
    case GET_FAVORITES_FROM_API: {
      // const state = store.getState;
      // const { user } = state;
      // const { token } = user;
      // on pourrait faire { token } = store.getState().user
      // ou alors :
      const { user: { token } } = store.getState();

      // quand on souhiate accéder à une route protégée par un token
      // on transmet ce token dans l'entête de la requête HTTP
      // pour tout le reste, on fait la même chose
      axios
        .get('http://localhost:3001/favorites', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            console.log(response.data.favorites);
            // les favoris ne sont pas dans le state encore !!
            // il faut justement qu'on les mette dans le state
            // donc il faut un payload
            const { favorites } = response.data;
            store.dispatch(saveFavorites(favorites));
          },
        ).catch(
          (error) => {
            console.log(error);
          },
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
