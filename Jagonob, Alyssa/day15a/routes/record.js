// -----------importing--------------
const express = require('express');

const record = express.Router();

const data = [
    {id: 1, name: "Black Panther"},
    {id: 2, name: "Iron Man"},
    {id: 3, name: "Captain America"},
    {id: 4, name: "Spider-Man"},
    {id: 5, name: "Avengers"}
]

// READ------------------------------
// http://localhost:5000/movies/getMovie
record.get('/getMovie', function(req, res){
    res.status(200).send(data);
});

// get id
// http://localhost:5000/movies/getMovie/1
record.get('/getMovie/:name',(req, res)=>{
    // let check = data.find((x)=>{
    //     return x.id === parseInt(req.params.id); //request parameter id
    // })

    // if(check){
    //     res.status(200).send(check);
    // }else{
    //     res.status(404).send('Id not found');
    // }
    
    let check = data.find((x)=>{
        return x.name === req.params.name; //request parameter id
    })

    if(check){
        res.status(200).send(check);
    }else{
        res.status(404).send('name not found');
    }

});

// ------------exporting--------------
module.exports = record;

