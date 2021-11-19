import {findRecipe} from '../../src/selectors/recipes'; 
import importedRecipes from 'src/data'; 

// tester findRecipe
  // structure 
    // vérifier qu'il s'agit d'une fonction
  // execution
    // vérifier qu'on nous retourne un objet contenant une propriété id si on passe le premier slug
    // vérifier qu'on nous retourne la première recette si on passe le premier slug
    // vérifier qu'on nous retourne undefined si on passe une slug bidon

describe('selectors / recipes', () => {

  describe('structure FindRecipe', () => {
    test('it is a function', () =>{
      expect(typeof findRecipe).toBe('function');
    });
  });  


describe('execution', () => {
  // vérifier qu'on nous retourne un objet contenant une propriété id si on passe le premier slug
  test('it returns an object with an id property when called with the first slug', () => {

    // on peut se resservir aussi de notre fichier data
    // on veut vérifier le type : typeOf
    // ou bien toMatchObject

    // pour un test donné, il peut être utile d'avoir plusieurs assertions

    // ici, on vérifie que l'on obtient bien un objet
    expect(typeof findRecipe(importedRecipes, importedRecipes[0].slug)).toBe('object');
    // et ici qu'on a bien une propriété id
    expect(findRecipe(importedRecipes, importedRecipes[0].slug)).toHaveProperty('id'); 

    // ou en une seule fois :
    // expect(
    //   findRecipe(importedRecipes, importedRecipes[0].slug)
    // ).toMatchObject(
    //   {
    //     id: expect.anything()
    //   }
    // );

  });

  // vérifier qu'on nous retourne la première recette si on passe le premier slug
  test('it returns the first recipe when called with the first slug ', () => {

    expect(findRecipe(importedRecipes, importedRecipes[0].slug)).toBe(importedRecipes[0]);

  });

  // vérifier qu'on nous retourne undefined si on passe une slug bidon
  test('it returns undefined when called with an inexistant slug', () => {
    // const recipes = [{'title': 'recipe1', 'id': 1, 'slug': 'test-slug1'}, {'title': 'recipe2', 'id': 2, 'slug': 'test-slug2'}];
    // const searchedSlug = '';

    expect(findRecipe(importedRecipes, 'bidon')).toBeUndefined();

  });
});

  })


