import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

// le store est le gardien de notre state: il le gère et le
// protège ( limite les accès au state , mise ne place d'actions possible)
const store = createStore(
  // reducer
  reducer,
  // normalement ici c'est le deuxième argument

  // enhancer
  devToolsEnhancer(),

);

// Ordre des arguments spécial pour cette fonction
// car une utilisation interne fait que si
// l'on donne un enhancer en second argument, il
// passera en troisième position
// /!\ prope uniquement a cette fonction createStore() /!\

export default store;
