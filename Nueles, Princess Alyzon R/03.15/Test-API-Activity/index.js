const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
PORT = process.env.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is now connected to port ${PORT}`);
})

app.get('/', (req, res) => {
    res.status(200).send("WELCOME!");
})