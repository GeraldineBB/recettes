// on importe le reducer
import recipesReducer, { initialState } from 'src/reducers/recipes';
import {setData} from 'src/actions/recipes'; 

// on crée un chapitre de test grâce à la fonction describe
// un chapitre est contitué :
// - d'un titre,
// - d'un contenu définit par une fonction
describe ('reducers / recipes', () => {

  // on peut imbriquer les chapitres en réutilisant describe dans le callback d'un autre describe
  describe('structure', () => {

      test('it is a function', () => {
        expect(typeof recipesReducer).toBe('function'); 
      }); 
  });

  describe('execution', () => {

    // on voudrait tester si l'appel du reducer sans argument nous retourne le state initial
    // test pas vraiment pertinent car dans le case default on renvoie toujours le initiial state
    test ('it return the initial state when called without argument', () => {
      expect(recipesReducer()).toBe(initialState); 
    }); 

    // on voudrait tester si l'appel du reducer sans argument nous retourne bien le state initial
    test('it return the initial state when called without argument (v2)', () => {

      const expectedInitialState = {
        list: [],
      };

      expect(recipesReducer()).toEqual(expectedInitialState);
    });


   // on voudrait tester l'action SET_DATA fonctionne correctement
    test ('it handles SET DATA action right',() => {

      // pour tester une fonction, on prépare des données en entrée
      const stateBefore = {
        list: [{test: 'test'}], 
      }

      const fakeRecipes = [{'title': 'recipe 1'}, {'title': 'recipe2'}];
      const setDataAction = setData(fakeRecipes);

      // on prépare ce à quoi on s'attend
      const expectedState = {
        list : fakeRecipes, 
      }

      // on vérifie que l'exécution de la fonction sur les données d'entrée
      // renvoie bien le résultat attendu
      // attention, pour la comparaison d'objet, toBe est souvent peu adapté
      // en efft toBe permet de vérifier qu'il s'agit du MEME objet 
      // il vaut souvent mieux utiliser toEqual (ou toStrictEqual) qui permettent
      // de vérifier que 2 objets ont la même structure et les mêmes valeurs
      expect(recipesReducer(stateBefore, setDataAction)).toEqual(expectedState); 
    });
   
  });  
  

}); 
