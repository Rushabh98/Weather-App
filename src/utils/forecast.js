const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e75a3c70217f257be38e7606de5bcf3f&query=' + longitude + ',' + latitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to fetch weather forecast!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                Description: body.current.weather_descriptions[0],
                Temperature: body.current.temperature,
                Feels_Like: body.current.feelslike
            })
        }
    })
}

module.exports = forecast