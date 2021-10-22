# WeatherAppNode - backend for WeatherApp to display local and searched weather
WeatherAppNode is a Node / Express server acting as an API to return current and forecasted weather data from OpenWeatherMap based on latitude/longitude or city name provided.

This repo is designed to be used in conjunction with WeatherApp project - front end repo [here](https://github.com/kmaaallen/WeatherApp) or another front-end project utilising current weather data.

# Description
WeatherAppNode was built in conjunction with a React front-end project, [WeatherApp](https://github.com/kmaaallen/WeatherApp), that displays the current and forecasted weather to the user.

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
ALLOWED_ORIGIN: url for front-end (should not be necesscary to run in development with local host)
</code>

Make sure you create add the .env file to gitignore.

Run <code>$npm install</code> to install required packages

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
This project is deployed on Heroku as a standalone app. 
Follow these steps to [create an app on Heroku and link to repository](https://devcenter.heroku.com/articles/git).
In the settings for this app set two environment variables:
API_KEY = your open weather api key
ALLOWED_ORIGIN = where you will be calling this API from (for example your front-end project url)

# Technologies / Packages
[Node](https://nodejs.org)
[Express](https://expressjs.com/) - Node.js web application framework
[OpenWeatherMap]((https://openweathermap.org) - free api for weather data
[Jest](https://jestjs.io/) - Testing framework

# Testing
This project contains unit tests using Jest and Supertest to test api calls.
To run all tests: <code>$ npm run test </code>
