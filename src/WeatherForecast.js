import React from "react";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherForecast(props) {
  return (
    <div className="weatherForecast ">
      <div className="row">
        <div className="col-1" />
        <div className="col-3 forecast-day"> {props.day} </div>
        <div className="col-3">
          <img
            id="icon"
            className="col-4"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            width="60px;"
            alt="weather-icon"
          />
        </div>

        <div className="col-5 temperature">
          <div className="col-5 high-temp">24</div>

          <span className="col-1 low-temp">16</span>
        </div>
      </div>
    </div>
  );
}
