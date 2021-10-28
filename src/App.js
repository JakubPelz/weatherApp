import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getWeather } from './components/store/actions/weatherActions';

import Index from './components';
import Forecast from './components/Forecast';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather('London'));
  }, [dispatch]);

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
