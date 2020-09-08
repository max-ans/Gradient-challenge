// == Imports
import store from 'src/store';
import {
  directionToLeft,
  directionToRight,
  randomFirstColor,
  randomLastColor,
} from 'src/actions/';

import { randomHexColor, generateSpanColor } from './utils';

// console.log(store);
// console.log(store.getState());

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

// abonnement aux changement du store => en cas de changement, la
// callback (fonction fournie en paramètre) est appelée
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    console.log('Random all colors');
    // data
    // state.nbColors += 2;
    // state.firstColor = randomHexColor();
    // state.lastColor = randomHexColor();

    // Pour ce qui est de dispatcher l'action dans ce cas,
    // on pourrait éffectuer undispatch avec un nouveau
    // type d'action (ex: RAMDOM_FIRST_AND_LAST_COLOR),
    // ou bien utiliser les deux dispatch suivant pour
    // le firstColor et le lastColor

    store.dispatch(randomFirstColor(randomHexColor()));

    store.dispatch(randomLastColor(randomHexColor()));
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    // state.nbColors += 1;
    // state.firstColor = randomHexColor();

    // Une action c'est un objet! Avec au minimun la propriété "type"
    //  qui en décrit l'intention.
    // il peut y avoir des propriétés supplémentaires , c'est ce
    // que l'on appelle le PAYLOAD de l'action. Dans notre cas ,
    // le PAYLOAD de cette action est la propriété newColor
    store.dispatch(randomFirstColor(randomHexColor()));
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    // state.nbColors += 1;
    // state.lastColor = randomHexColor();
    store.dispatch(randomLastColor(randomHexColor()));
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // state.direction = '270deg';

    // Si je veux appliquer un changement sur le State (Puisque
    // on s'en sert comme source de verité) : je décris
    // l'intention avec des mots , et le reducer se débrouillera.

    const action = directionToLeft();

    // on envoie l'action au store => dispatch
    store.dispatch(action);
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    // const action = {
    //   type: 'DIRECTION_TO_RIGHT',
    // };

    // store.dispatch(action);
    store.dispatch(directionToRight());
    // state.direction = '90deg';
  });
