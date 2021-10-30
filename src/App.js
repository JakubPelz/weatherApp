import React from 'react';

import Index from './components';
import DaysForecast from './components/DaysForecast';

const App = () => {
  return (
    <>
        <div className="App">
          <Index />
        </div>
        <DaysForecast />
    </>
  );
}

export default App;
