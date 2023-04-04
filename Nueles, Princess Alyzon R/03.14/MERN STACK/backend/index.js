require('dotenv').config()
const express = require('express')

//express app
const app = express();

//handle request using Routes
app.get('/home', (req, res) => {
    // console.log(req.url)
    // console.log(req.method)
    res.json({ mssg: 'Welcome to Home!!' })
})

// app.get('/projects', (req, res) => {
//     res.json({ mssg: 'Welcome to my Project Page!!' })
//     //res.send('<h1> Hello </h1>')
// })

app.post('/home', (req, res) => {
    res.json({ mssg: 'This is a POST Request' })
})

app.listen(process.env.PORT, () => { //reference to the port in .env 
    console.log('Listening to port', process.env.PORT)
}) 