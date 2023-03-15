// ----------------- import -----------------
const express = require('express');
const routes = require('./routes/record.js');
// ----------------- import -----------------


// --------------- initialize ---------------
const app = express();
// --------------- initialize ---------------


// --------------- middleware ---------------
app.use('/movies', routes);
// --------------- middleware ---------------


// --------------- connection ---------------
var port = 5000;
app.listen(port, ()=>{
    console.log(`Okay na. Listening to port ${port}`)
});

app.get('/', (req, res) => {
    res.status(200).send('Hello, Apple')
})

app.get('/movies', (req, res) => {
    res.status(200).send('This is the movies page, wow')
})

// --------------- connection ---------------