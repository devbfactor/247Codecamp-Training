const express = require('express');

const sample = express.Router();

sample.get('/sample',(req,res)=>{
    res.status(200).send('YO! this is just playing routes');
});

module.exports = sample;