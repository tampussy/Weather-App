const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c88dc173852e7148098f251147949329&query=37.8267,-122.4233&units=f'


request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    // console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
})

// Geocoding
// Address -> Lat/Long -> Weather

//
// Goal: Print the Lat/Long for Los Angeles
//
// 1. Fire-off a new request to the URL explored in the browser
// 2. Have the request module parse it as JSON
// 3. Print both the Latitude and Longitude to the terminal.
// 4. Test your work!

const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGFtcHVzc3kiLCJhIjoiY2tkNmdjMnBzMjFlaTJ5cXZ6N3NzcWtvdiJ9.tpizQ20HpYLEEghHhrcNnw&limit=1'

request({ url: mapbox, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude )
})