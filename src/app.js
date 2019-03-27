
const path     = require('path'),
      express  = require('express'),
      hbs      = require('hbs'),
      geocode  = require('./utils/geocode.js'),
      forecast = require('./utils/forecast.js');

const app = express()

// Define paths for Express config 
const publicDirectoryPath   = path.join(__dirname, '../public')
const viewsDirectoryPath    = path.join(__dirname, '../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

// Setup static directory to serve
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
        title: 'Help',
        helpText: 'This is some helpful text.',
        name: 'Pablo Costanzo'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page Not Found',
        name: 'Pablo Costanzo'
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

	