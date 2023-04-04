const express = require('express');

const record = express.Router(); //api

//http://localhost:5000/movies/getMovie/2
//http://localhost:5000/movies/getMovie/Avengers

//obj containing different movie data
const data = [
    { id: 1, namee: "Black Panther" },
    { id: 2, namee: "Iron Man" },
    { id: 3, namee: "Captain America" },
    { id: 4, namee: "Spider-Man" },
    { id: 5, namee: "Avengers" },
];

/*CRUD - Create, Read, Update, Delete */

/*--------------------- READ [get] ---------------------*/
    record.get('/getMovie', function(req, res) {
        res.status(200).send(data);
    });

    //look for movie item data (x) using its id
    record.get('/getMovie/:id', (req, res) => { 
        let check = data.find((x) => {  //find in data the parameter id
            return x.id === parseInt(req.params.id) //request parameter id ; will return id number
        })

        if(check){
            res.status(200).send(check)
        } else {
            res.status(404).send('ID Not Found.')
        }
    });   

    //look for movie item data (x) using its name
 /*    record.get('/getMovie/:namee', (req, res) => { 
        try{
            let check = data.find((x) => {  
                return x.namee === req.params.namee 
            })
                    
            if(check){
                res.status(200).send(check)
            }
        } catch(error) {
            res.status(404).send('Movie Not Found.')
        }
        } 
    }); 
*/

module.exports = record;