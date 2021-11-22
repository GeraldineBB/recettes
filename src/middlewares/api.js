import axios from 'axios';

import {
  GET_FAVORITES_FROM_API, LOAD_RECIPES_FROM_API, setData, saveFavorites,
} from '../actions/recipes';
import { LOGIN, LOGOUT, setCurrentUser } from '../actions/user';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES_FROM_API: {
      api.get('/recipes', {
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
      /*
      const state = store.getState();
      const { user } = state;
      const { token } = user;
      en plus court :
      */
      const { user: { token } } = store.getState();

      // quand on souhaite accéder à une route "protégée" par un token
      // on transmet ce token dans l'entete de la requete HTTP
      api
        .get('/favorites', /* , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      } */)
        .then(
          (response) => {
            console.log(response.data.favorites);
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

      api.post('/login', {
        email: email,
        password: password,
      }).then(
        (response) => {
          console.log(response.data);
          const userFromApi = response.data;
          // on a besoin d'un payload : met à jour le user, oui mais comment ?
          store.dispatch(setCurrentUser(userFromApi));

          // on mémorise le token dans l'instance axios
          api.defaults.headers.common.Authorization = `Bearer ${userFromApi.token}`;
        },
      ).catch(
        () => console.log('erreur'),
      );

      next(action);
      break;
    }
    case LOGOUT:
      // au logout, on supprime le token de notre instance axios
      delete api.defaults.headers.common.Authorization;
      next(action);
      break;
    default:
      next(action);
  }
};

export default apiMiddleWare;
