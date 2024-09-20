const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/weather', (req,res)=>{
    res.send('Weather Information')
})

app.get('/weather/:city', (req,res)=>{
    const city = req.params.city
    res.send(`Weather in ${city}`)
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})