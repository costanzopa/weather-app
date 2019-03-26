
const path = require('path');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
	geocode("Buenos Aires", (error, {latitude, longitude, location}) => {
		if (error) {
			res.send(error);
		} else {
			forecast(longitude, latitude, (error, forecastData) => {
				if (error) {
					res.send(error);
				} else  {
					res.send(location +"\n" + forecastData);
				}
			})
		}
	})	
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
})

	