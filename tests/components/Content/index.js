// on importe depuis enzyme al fonction permettant de 
// faire un rendu de surface
import { shallow } from 'enzyme';
// On importe le composant à tester
import Content from 'src/components/Content';
import Card from 'src/components/Card';
import importedRecipes from 'src/data';

describe ('components / Content', () => {
  
  // on récupère dans un élément d'enrobage le résultat du rendu de surface
  // on pourra faire des recherches pour compter par exemple ne nombre d'occurence d'un sous composant ou autre...
  const wrapper = shallow(<Content title="mon title" text="mon text" recipes={importedRecipes} />);

  test('it renders an element with a "content-title" class', () => {
    expect(wrapper.find('.content-title')).toHaveLength(1);
  });

  test('it renders the right number of Card', () => {
    expect(wrapper.find(Card)).toHaveLength(importedRecipes.length);
  });
});
