import React from 'react';
import PropTypes from 'prop-types';

const Directions = ({ changeDirection }) => (
  <div className="buttons group">
    <button
      type="button"
      className="button angle"
      value="270deg"
      id="toLeft"
      onClick={() => {
        changeDirection('270deg');
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
        changeDirection('45deg');
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
        changeDirection('135deg');
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
        changeDirection('225deg');
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
        changeDirection('315deg');
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
        changeDirection('90deg');
      }}
    >
      to right
    </button>
  </div>
);

Directions.propTypes = {
  changeDirection: PropTypes.func.isRequired,
};

export default Directions;
