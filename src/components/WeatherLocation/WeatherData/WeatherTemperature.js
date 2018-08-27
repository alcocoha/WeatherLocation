import React from 'react';
import WeatherIcons from 'react-weathericons';
import weathers from '../../../contants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperature">
        <WeatherIcons
        className="wicon"
        name={weathers[weatherState]}
        size="3x"
        />
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string,
}

export default WeatherTemperature;