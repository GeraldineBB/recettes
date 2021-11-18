import React from 'react';

import './style.scss';

import logo from 'src/assets/logo.png';

import LoginForm from 'src/components/LoginForm';

import { useSelector } from 'react-redux';

const AppHeader = () => {
  const email = useSelector((state) => state.user.emailValue);
  const password = useSelector((state) => state.user.passwordValue);
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm email={email} password={password} isLogged={isLogged} />
    </header>
  );
};

export default AppHeader;
