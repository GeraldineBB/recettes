// pour tester une fonction, on a besoin de la fonction
// on doit donc l'importer
import { sum } from 'src/dummy';

// la fonction test permet de modéliser un test :
// un test aura :
// - un titre,
// - un contenu définit par une fonction
test('the sum of 5 and 3 equal 8', () => {
  // dans le contenu du test, on va vérifier la véracité d'une ou plusieurs affirmations
  // on parle d'assertion
  // pour cela, on utilise la fonction expect et des matchers
  expect(sum(5, 3)).toBe(8);
});
