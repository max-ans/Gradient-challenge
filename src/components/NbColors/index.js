import React from 'react';
import Proptypes from 'prop-types';

const NbColors = ({ nbColors }) => (
  <div id="nbColors">
    {nbColors} couleur(s) générée(s)
  </div>
);

NbColors.propTypes = {
  nbColors: Proptypes.number.isRequired,
};

export default NbColors;
