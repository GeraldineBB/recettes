import React from 'react';

import './style.scss';

import logo from 'src/assets/logo.png';

import LoginForm from 'src/components/LoginForm';

import { useSelector, useDispatch } from 'react-redux';
import { changeUserField, login, logout } from '../../actions/user';

const AppHeader = () => {
  // on récupère email et password grâce au hook useSelector
  // le state est géré par deux reducers combinés
  // cela a pour effet de créer une tranche de state pour chaque reducer
  // ainsi les info gérées par le reducer userReducers sont accessibles dans state.user

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);

  const loggedMessage = useSelector((state) => (state.user.logged ? `Connecté en tant que ${state.user.pseudo}` : ''));

  const dispatch = useDispatch();

  const changeField = (value, name) => {
    dispatch(changeUserField(value, name));
  };

  const handleLogin = () => {
    // on veut quelque chose se produit > on émet une intention > on dipatch une action
    // on va dispatcher une action de type LOGIN
    // avec l'action creator login
    // on a besoin du login et de mdp (mais elles sont déja dans le state - pas besoin de les embarquer dans l'action)
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        isLogged={isLogged}
        loggedMessage={loggedMessage}
        changeField={changeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </header>
  );
};

export default AppHeader;
