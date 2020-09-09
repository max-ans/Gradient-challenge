import React from 'react';
import { useSelector } from 'react-redux';

// Dans le JSX , il ne faut qu'un seul élément
// racine ==> pas 2 divs frères
// pour palier a cette restriction , on  peut
// - Créer une div englobant l'intégralité du JSX
// - Utiliser un Fragment
const Gradient = () => {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);
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

export default Gradient;

/*

document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `
const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = direction === '90deg'
    ? `${firstSpan} → ${lastSpan}`
    : `${lastSpan} ← ${firstSpan}`;
*/
