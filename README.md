# FrontEnd Weather App with react, redux 

### 1) Create a functional design

![Schema](/diagram.png)

### 2) Text description of the application
**User Description**

   - The application can display the weather data for today and the forecast for 7 days in advance.
   - The application reads data from a preset location Olomouc.
   - The user will see the main page where he will find: date and time, search field, place for which the current forecast is displayed, forecast for the next 7   days, button for expanding the table forecast.
   - The user will also find a detailed forecast for today.
   - When the application is initially loaded, the user will see data from the preset location Olomouc.
   - The user can search for cities using the search box, which will be helped by a whisperer.
   - The application can now find and view over 200,000 cities from around the world.

**Description of the internal structure**
   
   - The application is written in React and Reduct.
   - Src contains the index.js file that renders the application, it contains the store and provider for redux.
   - App.js renders two parts of the application, the main part for displaying the application and the lower part for displaying the weather forecast detail.
   - In the components folder we find:
      1. **Data:** here is a json for loading cities to search.
      2. **Store:** contains two reducers for fetch data from openweatherapi.
      3. **Components:** other components contained in the components folder are loaded directly via components / index.js.


**Plans for the future**

>In the application, I would program another of these components with respect to time: user geolocation, forecast development as a graph.
>Overwrite the application in Typescript

The application is uploaded at https://weather-flax.vercel.app/
                      
