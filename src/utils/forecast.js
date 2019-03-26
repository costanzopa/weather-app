const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/ca4efca8186006eb84e3288ec81472a3/'+latitude+','+longitude+'?lang=es&units=si';

	request({url, json: true}, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!.', undefined);
		} else if (body.error) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
		}
	})
}


module.exports = forecast;