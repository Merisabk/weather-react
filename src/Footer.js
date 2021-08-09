import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <p className="text-center">
      {" "}
      <a
        href="https://github.com/Merisabk/my-first-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://github.com/Merisabk/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Merisa Bishwakarma{" "}
      </a>
    </p>
  );
}
