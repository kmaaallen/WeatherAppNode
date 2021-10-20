import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3001;

export const app = express();

app.get("/api/weather/:latitude/:longitude", (req, res) => {
    var latitude = req.params.latitude;
    var longitude = req.params.longitude;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.API_KEY}`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/api/weather/:city", (req, res) => {
    var city = req.params.city;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

