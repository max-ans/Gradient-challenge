// == Import npm
import React from 'react';

import NbColors from 'src/containers/NbColors'; // attention ici on passe par le container (assistant) de NbColors
import Controls from 'src/containers/Controls';
import Gradient from 'src/containers/Gradient';
import Directions from 'src/containers/Directions';

// == Import

// == Composant
const App = () => (
  <div className="app">
    <NbColors />
    <Controls />
    <Gradient />
    <Directions />
  </div>
);

// == Export
export default App;
