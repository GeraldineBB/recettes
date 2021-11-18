import React from 'react';

import './style.scss';

import logo from 'src/assets/logo.png';

import LoginForm from 'src/components/LoginForm';

import { useSelector, useDispatch } from 'react-redux';

const AppHeader = () => {
  const email = useSelector((state) => state.user.emailValue);
  const password = useSelector((state) => state.user.passwordValue);
  const isLogged = useSelector((state) => state.user.isLogged);

  const dispatch = useDispatch();

  const changeField = () => {
    dispatch(changeField);
  };

  const handleLogin = () => {
    dispatch(handleLogin);
  };

  const handleLogout = () => {
    dispatch(handleLogout);
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm email={email} password={password} isLogged={isLogged} changeField={changeField} handleLogin={handleLogin} handleLogout={handleLogout} />
    </header>
  );
};

export default AppHeader;
