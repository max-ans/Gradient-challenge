import React from 'react';

const Directions = () => (
  <div className="buttons group">
    <button
      type="button"
      className="button angle"
      value="270deg"
      id="toLeft"
    >
      to left
    </button>
    <button
      type="button"
      className="button angle"
      value="45deg"
      id="deg-45"
    >
      45°
    </button>
    <button
      type="button"
      className="button angle"
      value="135deg"
      id="deg-135"
    >
      135°
    </button>
    <button
      type="button"
      className="button angle"
      value="225deg"
      id="deg-225"
    >
      225°
    </button>
    <button
      type="button"
      className="button angle"
      value="315deg"
      id="deg-315"
    >
      315°
    </button>
    <button
      type="button"
      className="button angle"
      value="90deg"
      id="toRight"
    >
      to right
    </button>
  </div>
);

export default Directions;
