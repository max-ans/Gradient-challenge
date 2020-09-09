import React from 'react';
// useDispatch permet d'obtenir un référence vers store.dispatch
import { useDispatch } from 'react-redux';

import { changeGradientAngle } from 'src/actions';

const Directions = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button angle"
        value="270deg"
        id="toLeft"
        onClick={() => {
          dispatch(changeGradientAngle('270deg'));
        }}
      >
        to left
      </button>
      <button
        type="button"
        className="button angle"
        value="45deg"
        id="deg-45"
        onClick={() => {
          dispatch(changeGradientAngle('45deg'));
        }}
      >
        45°
      </button>
      <button
        type="button"
        className="button angle"
        value="135deg"
        id="deg-135"
        onClick={() => {
          dispatch(changeGradientAngle('135deg'));
        }}
      >
        135°
      </button>
      <button
        type="button"
        className="button angle"
        value="225deg"
        id="deg-225"
        onClick={() => {
          dispatch(changeGradientAngle('225deg'));
        }}
      >
        225°
      </button>
      <button
        type="button"
        className="button angle"
        value="315deg"
        id="deg-315"
        onClick={() => {
          dispatch(changeGradientAngle('315deg'));
        }}
      >
        315°
      </button>
      <button
        type="button"
        className="button angle"
        value="90deg"
        id="toRight"
        onClick={() => {
          dispatch(changeGradientAngle('90deg'));
        }}
      >
        to right
      </button>
    </div>
  );
};
export default Directions;
