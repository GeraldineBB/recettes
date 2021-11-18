import { NavLink, Link } from 'react-router-dom';

import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

const Menu = () => {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <nav className="menu">
      <NavLink
        to="/"
        className={
          // on peut passer à className (ou à style)
          // un callback qui prend en paramère isActive (le lien est il actif ou pas)
          // et qui doit retourner la classe (restectivement le style) ) appliquer
          ({ isActive }) => (
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          )
        }
      >
        Accueil
      </NavLink>

      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          to={`/recipe/${recipe.slug}`}
          className={
          ({ isActive }) => (
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          )
        }
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
