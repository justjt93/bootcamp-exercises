import React from "react";
import ReactDOM from "react-dom";

import Day_Forecast from "./Day_Forecast/Day_Forecast.jsx";
import "./style.css";
import forecast from"./forecast.js";
import "./index.html";
import Weekly_Forecast from "./Weekly_Forecast/Weekly_Forecast.jsx";



class App extends React.Component {
  render() {
    return (
      <Weekly_Forecast
        content={forecast.map(forecastDay => (
          <Day_Forecast
            weekday={forecastDay.weekday}
            weather={forecastDay.weather}
            tempDay={forecastDay.tempDay}
            tempNight={forecastDay.tempNight}
          />
        ))}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
