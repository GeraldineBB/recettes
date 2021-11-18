import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  if (props.loading) {
    return <Loading />;
  }

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

  return (
    <div className="app">

      <Switch>
        <Route path="/" exact>
          <Menu />
          <Home />
        </Route>

        <Route path="/recipe/:slug" exact>
          <Recipe />
        </Route>

        <Route>
          <Error />
        </Route>

      </Switch>

      {/* <Recipe /> */}
      {/* <Error /> */}
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
