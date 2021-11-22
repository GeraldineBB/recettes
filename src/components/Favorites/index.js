import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { getFavoritesFromAPI } from '../../actions/recipes';

const Favorites = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.favorites);

  useEffect(
    () => {
      console.log('je veux récupérer mes favoris depuis l\'api');
      dispatch(getFavoritesFromAPI());
    },
    [],
  );
  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes favorites"
        text="Vous adorez ces recettes, on vous comprend !"
        recipes={recipes}
      />
    </Page>
  );
};

export default Favorites;
