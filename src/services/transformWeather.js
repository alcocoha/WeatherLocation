import convert from 'convert-units';

const getWeatherState = weather => {
    const { id } = weather[0];

    if (id < 300) {
        return 'thunder';
    } else if (id < 400) {
        return 'drizzle'
    } else if (id < 600) {
        return 'rain'
    } else if (id < 700) {
        return 'snow';
    } else if (id === 800) {
        return 'sun';
    } else {
        return "cloudy";
    }
}

const getTemp = kelvin => {
    return convert(kelvin).from('K').to('C').toFixed(2);
}

const transformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const { weather } = weatherData;
    const weatherState = getWeatherState(weather);
    const temperature = getTemp(temp);

    const data = {
        temperature,
        weatherState,
        humidity,
        wind: `${speed} m/s`
    };

    return data;

}

export default transformWeather;