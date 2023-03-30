// --------------import-----------------------
const express = require('express');
const routes = require('./routes/record.js');
const routes2 = require('./routes/sample.js')//sample only
// --------------import-----------------------

// --------------initialize-------------------
const app = express();
// --------------initialize-------------------


// -------------middleware (API)---------------
app.use('/movies', routes);
// -------------middleware (API)---------------



// ---------------connection--------------------
var port = 5000;
app.listen(port, function(){
    console.log(`Listening to ${port}`)
});

app.get('/', function(req, res){
    res.status(200).send('Hello, mahina net ko huhu');
});

// req.params
// req.body
// req.query - after the '?' in a url

app.get('/movies', function(req, res){
    res.status(200).send('Hello, walang movies dito');
});


