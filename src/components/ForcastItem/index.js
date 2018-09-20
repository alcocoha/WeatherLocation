import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'

const ForecastItem = ({ weekDay, hour, data }) => {
    return (
        <div>
            <div id="horaDetalle">{weekDay} Hora: {hour}</div>
            <WeatherData
                data={data}
            />
        </div>
    );
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;