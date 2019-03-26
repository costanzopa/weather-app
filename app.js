const geocode = require('./utils/geocode.js');

geocode('Philadelphia', (error, data) => {
	console.log(error);
	console.log(data);
})