
const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Pablo Costanzo'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Pablo Costanzo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

/*geocode("Buenos Aires", (error, {latitude, longitude, location}) => {
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
	})*/	

	