const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const url = 'http://api.weatherstack.com/current?access_key=1ae7908cf9b52ae3a833554406a21481&query=37.8267,-122.4233&units=f'


forecast(-71.0596,42.3605, (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})
geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})