import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
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
      dispatch({ type: 'LOAD' });
    },
    [],
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
