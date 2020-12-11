const request = require('postman-request')
const chalk = require('chalk')

const url = 'http://api.weatherstack.com/current?access_key=1ae7908cf9b52ae3a833554406a21481&query=37.8267,-122.4233&units=f'
const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=1&access_token=pk.eyJ1IjoidmFuc3Ryb20iLCJhIjoiY2tpa24zd21mMDkycDMxcWxvZ21udDA3ZCJ9.LgwBAtqmEmXv-57qcZJupQ'

// request({url: url, json: true}, (error, response) =>{
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ', but it feels like ' + response.body.current.feelslike + ' degrees out.');
// })

request({url: geourl, json: true}, (error, response) =>{
    const latitude = response.body.features[0].geometry.coordinates[1]
    const longitude = response.body.features[0].geometry.coordinates[0]
    console.log(`latitude: ${latitude} longitude: ${longitude}`);
})
