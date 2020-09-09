import React from 'react';
import Proptypes from 'prop-types';

const Controls = ({ randomColorFirst, randomColorLast }) => (
  <div className="buttons group">
    <button
      type="button"
      className="button"
      id="randFirst"
      onClick={() => {
        randomColorFirst();
      }}
    >
      Random First
    </button>
    <button
      type="button"
      className="button"
      id="randAll"
      onClick={() => {
        randomColorFirst();
        randomColorLast();
      }}
    >
      Random All
    </button>
    <button
      type="button"
      className="button"
      id="randLast"
      onClick={() => {
        randomColorLast();
      }}
    >
      Random Last
    </button>
  </div>
);

Controls.propTypes = {
  randomColorFirst: Proptypes.func.isRequired,
  randomColorLast: Proptypes.func.isRequired,
};
export default Controls;
