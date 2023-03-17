// ---------- import ---------- //
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/hotelRoutes');
const hotel = require('./model/hotel')
require('dotenv').config();

// ---------- initialize ---------- //
const app = express();

// ---------- middleware/API ---------- //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// app.get('/', (req, res) => { 
//     res.status(200).send(hotel);
// })


// ---------- connection ---------- //
app.listen(process.env.port, () => {
    console.log(`Server is connected to ${process.env.port}.`)
})