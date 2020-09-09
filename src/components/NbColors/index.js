import React from 'react';
// useSelector est un hook qui permet de lire une
// information dans le store Redux
import { useSelector } from 'react-redux';

const NbColors = () => {
  const nbColors = useSelector((state) => state.nbColors);
  return (
    <div id="nbColors">
      {nbColors} couleur(s) générée(s)
    </div>
  );
};
export default NbColors;
