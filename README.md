# WeatherAppNode - backend for WeatherApp to display local and searched weather
WeatherAppNode is a Node / Express server acting as an API to return current weather data from OpenWeatherMap based on latitude/longitude or city name provided.

This repo is designed to be used in conjunction with WeatherApp project - front end repo [here](https://github.com/kmaaallen/WeatherApp) or another front-end project utilising current weather data.

# Description
WeatherAppNode was built in conjunction with a React front-end project, [WeatherApp](https://github.com/kmaaallen/WeatherApp), that displays the current weather to the user.

It is a Node and Express server used as an API that fetches current weather information using the [OpenWeatherMap API] (https://openweathermap.org/api) based on provided latitude/longitude or provided city. With the React project displaying that information.

# How to set up and run project
## Set up requirements
### Node
This project is built using Node and you will need to have Node installed for development.

Go to [Node.js](https://nodejs.org/en/) to download and install Node if you don't already have it.

This will also install npm - Node package manager

### OpenWeatherMap
To use the OpenWeatherMap API you will need to [sign up for an account](https://openweathermap.org/api);

Once you sign up you can find your API key on your account page.

### Clone and set up env variables
Clone this repository.

In your project create a .env file at the top level and add your API key:

<code>
API_KEY: key
</code>

Make sure you create add the .env file to gitignore.

## Run the project

<code>npm start</code>

This will start the server on your local port.

# How to use project

To use the pre-existing front-end project that utilises this server go to: [WeatherApp project](https://github.com/kmaaallen/WeatherApp).

If creating your own front-end project:

To get weather based on latitude and longitude use the following API call:

<code>fetch(`/api/weather/${latitude}/${longitude}`)</code>

To get weather based on city name use the following API call:

<code>fetch(`/api/weather/${city}`)</code>

# How to deploy project
TO DO - Deploy project to Heroku

# Technologies
Node
Express
DotEnv
Node-Fetch
OpenWeatherMap
Jest (?)

# Testing
TO DO
Jest
How to run test
Check coverage ?
