import React from 'react';

import Index from './components';
import Forecast from './components/Forecast';

const App = () => {
  return (
    <>
      <div className="App">
        <Index />
      </div>
      <Forecast />
    </>
  );
}

export default App;
