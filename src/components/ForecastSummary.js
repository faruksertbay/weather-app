/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import React from "react";

function ForecastSummary({ date, description, icon, temperature, onSelect }) {
    return (
        <div className="forecast-summary">
            <div className="forecast-summary_date">
                {moment(date).format("ddd Do MMM")}
            </div>
            <div className="forecast-summary__icon" data-testid="forecast-icon">
                <WeatherIcon name="owm" iconId={icon} />
            </div>
            <div className="forecast-summary_description">{description}</div>
            <div className="forecast-summary_temperature">
                {temperature.max}&deg;C
            </div>
            <button type="button" onClick={() => onSelect(date)}>
                More Details
            </button>
        </div>
    );
}

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }).isRequired,
};

export default ForecastSummary;