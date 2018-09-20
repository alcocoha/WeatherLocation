import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForcastItem';
import TransformForecast from './../services/transformForecast';
import './styles.css';

const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];

const data = {
    temperature: 10,
    weatherState: '30',
    humidity: 23,
    wind: 'normal'
};

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = 'b99fa12437d18076b8ce6f7e66ae51b5';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = { forecastData: null };
    };

    componentDidMount(){
        const { city } = this.props;
        this.updateCity(city);
    };
    
    componentWillReceiveProps(nextProps) { // ESTE SE EJECUTA CUANDO HAY UN CAMBIO EN LAS PROPS DEL COMPONENTE
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null}); // SE SETEA EL STATE CON LA PROPIEDAD EN NULL PARA QUE APAREZCA DE NUEVO LA LEYENDE DE "CARGANDO.."
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const apiForecast = `${url}?q=${city}&appid=${apiKey}`;
        fetch(apiForecast)
        .then( data => (data.json()))
        .then( weatherData => {
            console.log(weatherData);
            const forecastData = TransformForecast(weatherData);
            console.log("forecastData:", forecastData);
            this.setState({ forecastData });
        });
    }

    renderForecastItemDay(forecastData) {
        return forecastData.map( forecast => {
            return (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}/>);
        });
    };

    renderProgress = () => {
        return <h3>Cargando pronósticos de tiempo...</h3>;
    };

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forcecastTitle'>hola ForecastExtended {city}</h2>
                {forecastData ?
                    this.renderForecastItemDay(forecastData)
                    :
                    this.renderProgress()
                }
            </div>
        );
    };
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default ForecastExtended;