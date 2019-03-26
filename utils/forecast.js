const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/ca4efca8186006eb84e3288ec81472a3/'+latitude+','+longitude;

	request({url: url, json: true}, (error, response) => {
		if (error) {
			callback('Unable to connect to location services!.', undefined);
		} else if (response.body.error) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			callback(undefined, response.body.daily.data[0]);
		}
	})
}


module.exports = forecast;