import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  function handleSubmit(response) {
    alert(`The weather in London is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=754f68c53ca68b26fdebc81ec91936ca&units=metric`;
  axios.get(url).then(handleSubmit);
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
