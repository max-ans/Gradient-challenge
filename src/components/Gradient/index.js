import React from 'react';
import PropTypes from 'prop-types';

// Dans le JSX , il ne faut qu'un seul élément
// racine ==> pas 2 divs frères
// pour palier a cette restriction , on  peut
// - Créer une div englobant l'intégralité du JSX
// - Utiliser un Fragment
const Gradient = ({ firstColor, lastColor, direction }) => {
  // const firstColor = 'blue';
  // const lastColor = '#f0f';
  // const direction = '90deg';
  const gradient = `linear-gradient(${direction},${firstColor},${lastColor})`;

  const styleFirstSpan = {
    color: firstColor,
  };

  // On peut forunir du style inline : objet fourni a la prop style
  // qui sera traduit en CSS, Donc attention  => syntaxe différente
  // ex: {textAlign: 'center'}
  return (
    <>
      <div id="colors">
        <span style={styleFirstSpan}>{firstColor}</span>
        <span style={{ transform: `rotate(calc(${direction} - 90deg))` }}>→</span>
        <span style={{ color: lastColor }}>{lastColor}</span>
      </div>
      <div id="gradient" style={{ background: gradient }} />
    </>
  );
};

Gradient.propTypes = {
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Gradient;
