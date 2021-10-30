import { GET_FORECAST, SET_ERROR} from '../types';
import { second_api_key } from '../../config2.json';

export const getForecast = (latitude, lontitude, onSuccess = () => {}, onError = () => {}) => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${lontitude}&exclude=hourly,minutely,alerts&units=metric&appid=${second_api_key}`)
          
           if(!res.ok) {
               const resDataForecast = await res.json();
               throw new Error(resDataForecast.message);
           } 
           const resDataForecast = await res.json();
           console.log(resDataForecast)
           dispatch({
               type: GET_FORECAST,
               payload: resDataForecast,
           });
           onSuccess();
        } catch (err) {
          dispatch(setError(err.message));
          onError();
        }
    }
}

const setError = (err) => {
    return {
       type: SET_ERROR,
       payload: err,
    }
}; 