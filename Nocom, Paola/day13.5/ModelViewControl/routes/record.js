const express = require('express');

const record = express.Router();

const data = [
    {
        id: 1,
        name: "Black Panther"
    },
    {
        id: 2,
        name: "Iron Man"
    },
    {
        id: 3,
        name: "Captain America"
    },
    {
        id: 4,
        name: "Spider-Man"
    },
    {
        id: 5,
        name: "Avengers"
    }
]


record.get('/getMovie', (req, res) => {
    res.status(200).send(data);
})


// record.get('/getMovie/:name', (req, res) => {
//     let check = data.find(x => {
//         return x.name === req.params.name;
//     });

//     if (check) {
//         res.status(200).send(check);
//     } else {
//         res.status(404).send("Movie not found");
//     }
// });

record.get('/getMovie/:id', (req, res) => {
    let check = data.find(x => {
        return x.id === parseInt(req.params.id);
    });

    if (check) {
        res.status(200).send(check);
    } else {
        res.status(404).send("ID not found");
    }
});


module.exports = record;