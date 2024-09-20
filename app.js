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
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = response.data

        res.send(`
            <h1>Weather in ${city}</h1>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Weather: ${weatherData.weather[0].description}</p>
            `);
        

    }catch(error){
        res.send('City not found or there was an error retriving the data')
    }
})

//Start the Server
app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})