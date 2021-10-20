import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
var currentWeather, lat, long;


var corsOptions = {
    origin: 'https://react-weather-app-front-end.herokuapp.com',
    optionsSuccessStatus: 200
}

export const app = express();

app.use(cors())

app.get("/", cors(corsOptions), function (req, res) {
    res.sendFile(path.resolve('server/index.html'));
});

app.get("/api/weather/:latitude/:longitude", cors(corsOptions), (req, res) => {
    var latitude = req.params.latitude;
    var longitude = req.params.longitude;
    var currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.API_KEY}`;
    var forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.API_KEY}`;

    Promise.all([
        fetch(currentWeatherApiUrl),
        fetch(forecastApiUrl)
    ]).then(function (responses) {
        // Two Api calls as onecall doesn't contain City Name
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        res.send({ weatherNow: data[0], forecast: data[1] });
    }).catch(function (error) {
    });
});

app.get("/api/weather/:city", cors(corsOptions), (req, res) => {
    var city = req.params.city;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(function (data) {
            currentWeather = data;
            lat = currentWeather.coord.lat;
            long = currentWeather.coord.lon;
            var forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.API_KEY}`;
            return fetch(forecastApiUrl)
        }).then(res => res.json())
        .then(data => {
            res.send({ weatherNow: currentWeather, forecast: data });
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
