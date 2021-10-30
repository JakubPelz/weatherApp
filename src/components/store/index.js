import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducer';
import forecastReducer from './reducers/forecastReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;