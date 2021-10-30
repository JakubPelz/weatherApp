import { GET_WEATHER, SET_ERROR} from '../types';
import { second_api_key } from '../../config2.json';

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&appid=${second_api_key}`)
          
           if(!res.ok) {
               const resData = await res.json();
               throw new Error(resData.message);
           } 
           const resData = await res.json();
           //console.log(resData)
           dispatch({
               type: GET_WEATHER,
               payload: resData,
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