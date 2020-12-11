const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=1ae7908cf9b52ae3a833554406a21481&query=37.8267,-122.4233'

request({url: url}, (error, response) =>{
    const data = JSON.parse(response.body);
    console.log(data.current)
})