// == Imports
import store from 'src/store';
import { randomHexColor, generateSpanColor } from './utils';

console.log(store);
console.log(store.getState());

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { direction, firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = direction === '90deg'
    ? `${firstSpan} → ${lastSpan}`
    : `${lastSpan} ← ${firstSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    console.log('Random all colors');
    // data
    // state.nbColors += 2;
    // state.firstColor = randomHexColor();
    // state.lastColor = randomHexColor();
    // ui
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    // state.nbColors += 1;
    // state.firstColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    // state.nbColors += 1;
    // state.lastColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // state.direction = '270deg';

    // Si je veux appliquer un changement sur le State (Puisque
    // on s'en sert comme source de verité) : je décris
    // l'intention avec des mots , et le reducer se débrouillera.

    const action = {
      type: 'DIRECTION_TO_LEFT',
    };

    // on envoie l'action au store => dispatch
    store.dispatch(action);

    renderGradient();
    renderColors();
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    // const action = {
    //   type: 'DIRECTION_TO_RIGHT',
    // };

    // store.dispatch(action);
    store.dispatch({ type: 'DIRECTION_TO_RIGHT' });
    // state.direction = '90deg';
    renderGradient();
    renderColors();
  });
