import axios from 'axios';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOAD': {
      axios.get('http://localhost:3001/login', {
        // email: emailValue,
        // password: passwordValue,
      }).then(
        (response) => {
          console.log(response.data);

          // dispatch d'une action enregistrer le pseudo
          store.dispatch({ type: 'SET_CURRENT_USER', value: response.data.pseudo });
        },
      ).catch(
        (error) => console.log(error),
      );

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleWare;
