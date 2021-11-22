import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Favorites from '../Favorites';

import Loading from './Loading';

import './style.scss';

function App() {
  const loading = useSelector((state) => state.recipes.loading);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch({ type: 'LOAD_RECIPES_FROM_API' });
    },
    [],
  );

  // quand la location change, on applique un effet qui fait
  // scroller la page en haut
  const location = useLocation();

  useEffect(
    () => {
      console.log('on veut scroller !');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      {
        // le composant Routes englobe des composants Route
        // Comme le Switch, le composant Routes ne rend qu'une des routes qu'il contient
        // Contrairement au Switch, il choisit la route la plus approprié
        // Par exemple, pour une url /post/add, la route de path /post/add sera préférée
        // à la route paramétrable /post/:postId sui matche pourtant mais qui est moins précise
        // et ceux, même si cette dernière est en première position
        // on peut voir ça si dessous avec la route en path *
      }
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
      </Routes>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
