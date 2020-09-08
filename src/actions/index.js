// actions types

export const DIRECTION_TO_LEFT = 'DIRECTION_TO_LEFT';
export const DIRECTION_TO_RIGHT = 'DIRECTION_TO_RIGHT';
export const RANDOM_FIRST_COLOR = 'RANDOM_FIRST_COLOR';
export const RANDOM_LAST_COLOR = 'RANDOM_LAST_COLOR';

// actions creators
// fonction qui retourne une action du type indiqué

// versions ancienne
// export const directionToLeft = () => {
//   return {
//     type: DIRECTION_TO_LEFT,
//   }
// }

// version ES6
export const directionToLeft = () => ({ type: DIRECTION_TO_LEFT });
export const directionToRight = () => ({ type: DIRECTION_TO_RIGHT });
export const randomFirstColor = (payload) => ({
  type: RANDOM_FIRST_COLOR,
  newColor: payload,
});
export const randomLastColor = (payload) => ({
  type: RANDOM_LAST_COLOR,
  newColor: payload,
});
