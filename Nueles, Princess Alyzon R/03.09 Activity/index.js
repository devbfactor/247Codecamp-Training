const express = require('express');
const route1 = require('./routes/users.js');
const routes2 = require('./routes/userId.js');

const conn = express();

conn.use('/users', route1);
conn.use('/users', routes2);

conn.get('/', (req, res) => {
    res.status(200).send("03.09 Activity")
})

conn.get('/users', (req, res) => {
    res.status(200).send('Get List of Users')
})

var port = 3000;
conn.listen(port, () => {
    console.log(`Server now listening at port: ${port}`)
})