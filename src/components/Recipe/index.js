/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { findRecipe } from 'src/selectors/recipes';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe() {
  // const dispatch = useDispatch();
  // useEffect(
  //   () => {
  //     dispatch({ type: 'LOAD' });
  //   },
  // );
  const list = useSelector((state) => state.recipes.list);
  console.log('list recipe', list);

  // récupération du slug
  {
    list.map(
      (recipe) => {
        console.log(recipe.slug);
        const { slug } = recipe;
        console.log(slug);
      },
    );
  }

  const recipe = useSelector((state) => findRecipe(state.recipes.list, 'pizza-margherita'));

  if (!recipe) {
    return <Redirect to="/error" />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;
