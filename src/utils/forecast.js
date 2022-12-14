const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=08372a09202bc1cdddf49af231e94a1e&query='+latitude+','+longitude+'&units=f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            console.log(body);
            callback(undefined, body.current.weather_descriptions[0]+'. it is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out. The current humidity is '+body.current.humidity+'. ')
        }
    })

}

module.exports = forecast;