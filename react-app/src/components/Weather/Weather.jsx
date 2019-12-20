import React, {useCallback, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import "./Weather.scss";

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');
    const [isError, setIsError] = useState(false);

    const getWeather = useCallback(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=98c355d73f22c6eb33c4bc0bd22031fe')
            .then(res => {
                setWeather(Math.floor(res.data.main.temp - 273).toString());
                setIsError(false);
            })
            .catch(err => {
                setIsError(true);
            })
    }, [setWeather, city, setIsError]);
    return (
        <div className="weather-wrapper">
            <TextField value={city} onChange={(e) => setCity(e.target.value)}/>
            <Button onClick={getWeather}>Get</Button>
            <span>{weather} {weather ? 'deg.' : ''}</span>
            {isError ? <span className="error">Invalid data</span> : ''}
        </div>
    )
};

export default Weather;
