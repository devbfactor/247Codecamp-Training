const express = require('express');
const route1 = require('./routes/users.js')
const route2 = require('./routes/sample.js')

const app = express();

app.use('/data', route1);
app.use('/data', route2);

var port = 5000;
app.listen(port, function(){
    console.log(`Listening to ${port}`)
});

app.get('/', function(req, res){
    res.status(200).send('Checking');
});

app.get('/data', function(req, res){
    res.status(200).send('The start of data');
});