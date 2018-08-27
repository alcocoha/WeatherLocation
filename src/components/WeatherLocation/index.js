import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';

// UN COMPONENTE FUNCIONAL ES UN COMPONENTE QUE SE BASA EN UNA ÚNICA FUNCIÓN
// ESTO ES UN COMPONENTE SIMPLE

const url = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = "b99fa12437d18076b8ce6f7e66ae51b5";

class WeatherLocation extends Component {

    constructor({ city }) {
        console.log("constructor");
        super();
        this.state = {
            city,
            data: null
        }
    }

    componentWillMount = () => {
        console.log("componentWillMount: se ejecuta una única vez antes de renderizarse")
        const { city } = this.state;
        const apiWeather = `${url}?q=${city}&appid=${apiKey}`;
        const myPromise = fetch(apiWeather);

        myPromise.then(data => {
            console.log(data);
            return data.json();
        }).then(weatherData => {
            console.log(weatherData);
            const data = transformWeather(weatherData);
            this.setState({ data });
        });
    }

    componentDidMount = () => {
        console.log("componentDidMount");
    }

    componentWillUpdate = () => {
        console.log("componentWillUpdate");
    }

    componentDidUpdate = () => {
        console.log("componentDidUpdate");
    }

    render = () => {
        console.log("render");
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocation" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {
                    data
                        ?
                        <WeatherData data={data} />
                        :
                        <LinearProgress />
                }
            </div>
        );
    }

}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;