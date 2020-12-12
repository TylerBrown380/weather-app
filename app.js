const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const url = 'http://api.weatherstack.com/current?access_key=1ae7908cf9b52ae3a833554406a21481&query=37.8267,-122.4233&units=f'

const myArgs = process.argv[2];
if(!myArgs) {
    console.log('Please provide a city')
} else {
    geocode(myArgs, (error, {latitude, longitude, location} = {} ) => {
        if(error) {
            return console.log(error);
        } 
        forecast(longitude,latitude, (forecastError, forecastData) => {
            if(forecastError) {
                return console.log(error);
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}
