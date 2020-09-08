// actions types

// export const DIRECTION_TO_LEFT = 'DIRECTION_TO_LEFT';
// export const DIRECTION_TO_RIGHT = 'DIRECTION_TO_RIGHT';
export const RANDOM_FIRST_COLOR = 'RANDOM_FIRST_COLOR';
export const RANDOM_LAST_COLOR = 'RANDOM_LAST_COLOR';
export const CHANGE_GRADIENT_ANGLE = 'CHANGE_GRADIENT_ANGLE';

// actions creators
// fonction qui retourne une action du type indiqué

// versions ancienne
// export const directionToLeft = () => {
//   return {
//     type: DIRECTION_TO_LEFT,
//   }
// }

// version ES6
/*   DIRECTION   */
// export const directionToLeft = () => ({ type: DIRECTION_TO_LEFT });

// export const directionToRight = () => ({ type: DIRECTION_TO_RIGHT });

export const changeGradientAngle = (payload) => ({
  type: CHANGE_GRADIENT_ANGLE,
  angle: payload,
});

/* COLOR  */
export const randomFirstColor = (payload) => ({
  type: RANDOM_FIRST_COLOR,
  newColor: payload,
});

export const randomLastColor = (payload) => ({
  type: RANDOM_LAST_COLOR,
  newColor: payload,
});
