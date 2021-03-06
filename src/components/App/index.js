// == Import npm
import React from 'react';

import NbColors from 'src/components/NbColors';
import Controls from 'src/components/Controls';
import Gradient from 'src/components/Gradient';
import Directions from 'src/components/Directions';

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
