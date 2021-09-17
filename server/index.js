require('dotenv').config();
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

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


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});