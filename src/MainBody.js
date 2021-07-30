import React from "react";
import "./MainBody.css";
import WeatherForecast from "./WeatherForecast";

export default function MainBody() {
  return (
    <div className="MainBody container">
      <div className="container">
        <form className="Search">
          <input type="search" placeholder="Enter city" />
          <button type="submit" className="search-button">
            Search
          </button>
          <button id="current-location">Current Location</button>
        </form>

        <h1>
          <span id="city">Porto</span>
          <br />
          <span id="date"> Tuesday 14:55 </span>
        </h1>
        <h2 id="description">clear sky</h2>
        <p id="temperature">22ºC</p>
        <ul>
          <li id="humidity">Humidity: 70%</li>
          <li id="wind">Wind: 3 km/h</li>
        </ul>
        <hr />
        <WeatherForecast day="Thu" />
        <WeatherForecast day="Fri" />
        <WeatherForecast day="Sat" />
        <WeatherForecast day="Sun" />
        <WeatherForecast day="Mon" />
      </div>
    </div>
  );
}
