import { GET_FORECAST, SET_ERROR } from '../types';

const initialState = {
  data: null,
  error: '',
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return {
        data: action.payload,
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default forecastReducer;