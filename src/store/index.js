import { createStore } from 'redux';

import reducer from './reducer';

// le store est le gardien de notre state: il le gère et le
// protège ( limite les accès au state , mise ne place d'actions possible)
const store = createStore(reducer);

export default store;
