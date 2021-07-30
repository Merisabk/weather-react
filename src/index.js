import React from "react";
import ReactDOM from "react-dom";
import MainBody from "./MainBody";
import Footer from "./Footer";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <MainBody />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
