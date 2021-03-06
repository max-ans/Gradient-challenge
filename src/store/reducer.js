import {
  RANDOM_FIRST_COLOR,
  RANDOM_LAST_COLOR,
  // DIRECTION_TO_LEFT,
  // DIRECTION_TO_RIGHT,
  CHANGE_GRADIENT_ANGLE,
} from 'src/actions/';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// reducer : fonction qui prend un argument (le state actuel) et une
// action, et qui retourne le nouveau state
function reducer(state = initialState, action = {}) {
  //  retourner le nouveau state sur lequel on a appliqué l'action
  // console.log('appel à la fonction reducer', action);

  switch (action.type) {
    // case DIRECTION_TO_LEFT:
    //   return {
    //     ...state,
    //     direction: '270deg',
    //   };
    // case DIRECTION_TO_RIGHT:
    //   return {
    //     ...state,
    //     direction: '90deg',
    //   };
    case RANDOM_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.newColor,
      };
    case RANDOM_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.newColor,
      };
    case CHANGE_GRADIENT_ANGLE:
      return {
        ...state,
        direction: action.angle,
      };
    default:
      return state;
  }

  // if (action.type === 'DIRECTION_TO_LEFT') {
  //   // state.direction = '270deg';
  //   // on vas créer une copie du state afin de lui appliquer
  //   // les modifications souhaitées

  //   // const newState = { ...state };
  //   // newState.direction = '270deg';
  //   // return newState;

  //   // même façon mais optimiser:
  //   return {
  //     ...state,
  //     direction: '270deg',
  //   };
  //   // je crée un object dans lequel je déverse mon
  //   // state initial et j'applique la modification souhaité
  //   // (ici => direction). Le tout étant dans le return.
  // }

  // if (action.type === 'DIRECTION_TO_RIGHT') {
  //   // state.direction = '270deg';
  //   // on vas créer une copie du state afin de lui appliquer
  //   // les modifications souhaitées

  //   // const newState = { ...state };
  //   // newState.direction = '270deg';
  //   // return newState;

  //   // même façon mais optimiser:
  //   return {
  //     ...state,
  //     direction: '90deg',
  //   };
  //   // je crée un object dans lequel je déverse mon
  //   // state initial et j'applique la modification souhaité
  //   // (ici => direction). Le tout étant dans le return.
  // }
}

export default reducer;
