/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/App.css";

function ForecastSummaries({ forecasts, onForecastSelect }) {
    return (
        <div className="forecast-summaries">
            {forecasts.map((forecast) => {
                return (
                    <ForecastSummary
                        key={forecast.date}
                        date={forecast.date}
                        icon={forecast.icon.toString()}
                        temperature={forecast.temperature}
                        description={forecast.description}
                        onSelect={onForecastSelect}
                    />
                );
            })}
        </div>
    );
}

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    }),
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};
