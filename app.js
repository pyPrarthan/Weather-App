const express = require('express')
const axios = require('axios')
const app = express()

const API_KEY = 'fecb85fd3a879c7dfae3caa5a07eb9eb'

//Home route
app.get('/', (req, res)=>{
    res.send('Hello World')
})

//Weather Route
app.get('/weather', (req,res)=>{
    res.send('Weather Information')
})

//Weather Route for a specific city
app.get('/weather/:city', async (req,res)=>{
    const city = req.params.city
    
    try{
      //Make a request to OpenWeatherApp API
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const weatherData = response.data;

      //Getting the main weather condition (like "Clear", "Rain", "Clouds", etc.)
      const weatherCondition = weatherData.weather[0].main;

      // Sending HTML with embedded JavaScript to dynamically change background color
      res.send(`
            <html>
                <head>
                    <title>Weather in ${city}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            text-align: center;
                            padding-top: 50px;
                            transition: background-color 1s ease;
                        }
                    </style>
                </head>
                <body>
                    <h1>Weather in ${city}</h1>
                    <p>Temperature: ${weatherData.main.temp}°C</p>
                    <p>Weather: ${weatherData.weather[0].description}</p>

                    <script>
                        const weatherCondition = "${weatherCondition}";
                        const body = document.body;

                        switch(weatherCondition) {
                            case 'Clear':
                                body.style.backgroundColor = 'yellow';
                                break;
                            case 'Rain':
                                body.style.backgroundColor = 'blue';
                                break;
                            case 'Clouds':
                                body.style.backgroundColor = 'grey';
                                break;
                            case 'Snow':
                                body.style.backgroundColor = 'lightblue';
                                break;
                            default:
                                body.style.backgroundColor = 'lightgrey';
                                break;
                        }
                    </script>
                </body>
            </html>
        `);
    }catch(error){
        res.send('City not found or there was an error retriving the data')
    }
})

//Start the Server
app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})