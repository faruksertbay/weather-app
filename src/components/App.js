import React, { useState, useEffect } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "./Requests/GetForecast";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedDate && <ForecastDetails forecast={selectedDate} />}
    </div>
  );
}

export default App;
