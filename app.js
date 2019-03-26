const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

if (!address) {
	console.log('Please provide an address.');
} else {
	geocode(address, (error, data) => {
		if (error) {
			return	console.log(error);
		} else {
			forecast(data.longitude, data.latitude, (error, forecastData) => {
				if (error) {
					return console.log(error);
				}
				console.log(data.location);
				console.log(forecastData);
			})
		}
	})	
}




