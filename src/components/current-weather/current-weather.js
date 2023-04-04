import "./current-weather.css";
import React from "react"

function CurrentWeather({data}) {

    console.log(data)

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`weather-icon/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <div className="temperature">{Math.round(data.main.temp)}°</div>
        <div className="details">
          <div className="parameter-row">
          <img src="weather-icon/a07ff62978fad3b36c29.png" alt="weather" className="details-icon"/>
            <span className="parameter-value">{data.wind.speed}</span>
            <span className="parameter-label">Wind | m/s</span>
          </div>
          <div className="parameter-row">
          <img src="weather-icon/23ccd1b0ec73d8875c1f.png" alt="weather" className="details-icon"/>
            <span className="parameter-value">{data.main.humidity}</span>
            <span className="parameter-label">Humidity | %</span>
          </div>
          <div className="parameter-row">
            <img src="weather-icon/daac1395a5e8e0cd4b47.png" alt="weather" className="details-icon"/>
            <span className="parameter-value">{data.main.pressure}</span>
            <span className="parameter-label">Pressure | hPa</span>
          </div>
    
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
