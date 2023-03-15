// IMPORT ============================= /
const express = require('express');
const routes = require('./routes/data.js');

// INITIALIZE ========================= /
const app = express();

// MIDDLEWARE ========================= /
app.use('/books', routes);

// CONNECTION ========================= /
let port = 3001;
app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
});

// GET PAGES ========================== / 
app.get('/', (req, res)=>{
    res.status(200).send('Welcome to my bookstore!')
});

app.get('/books', (req, res)=>{
    res.status(200).send('Pick a book, any book :)')
});
