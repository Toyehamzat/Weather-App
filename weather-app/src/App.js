import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../src/components/Api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const [forecast, setForecast] = useState(null);

  // const defaultSearch=(Search)=>{
  //   // const [lat, lon] = Search.value.split(" ");
  //   const CurrentWeatherFetch = fetch(
  //     `${WEATHER_API_URL}/weather?lat=6.45}&lon=3.4appid=${WEATHER_API_KEY}&units=metric`
  //   );
  //   const forcastFetch = fetch(
  //     `${WEATHER_API_URL}/forecast?lat=6.45&lon=3.4&appid=${WEATHER_API_KEY}&units=metric`
  //   );

  //   Promise.all([CurrentWeatherFetch, forcastFetch])
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forcastResponse = await response[1].json();

  //       setCurrentWeather({ city: Search.label, ...weatherResponse });
  //       setForecast({ city: Search.label, ...forcastResponse });
  //     })
  //     .catch(console.log);
  

  // };
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const CurrentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forcastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([CurrentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
