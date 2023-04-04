/** REST API
        API - Application Program Interface
    client-side = frontend/browser
    server-side = backend 
**/


/*--------------------- import ---------------------*/
    //const mongoose = require('mongoose');
    const express = require('express');
    //console.log(express);
    const routes = require('./routes/record.js');
/*--------------------- import ---------------------*/


/*--------------------- initialize ---------------------*/
    const app = express();
        //console.log(app);  //can now use as API to interact with the server
/*--------------------- initialize ---------------------*/

//http://localhost:5000/movies

/*--------------------- middleware --------------------- api */
    app.use('/movies', routes);
/*--------------------- middleware ---------------------*/


/*--------------------- connection ---------------------*/
    app.get('/', function(req, res) {  //1st parameter = path; 2nd param = function(request, respond){}
        res.status(200).send("Hello World!");
    }); 

    /* app.get('/movies', function(req, res) {  //add another route
        res.send("This is the movies page");
    }); */
     
    app.get('/movies', function(req, res) {
        res.status(200).send('This is the movies page, wow')
    })

    var port = 5000;
    app.listen(port, () => { //connect to serrver
        console.log(`server is now listening at port: ${port}`)
    });

    // app.listen(port, function() {
    //     console.log(`server is now running in port: ${3001}`)
    // });
/*--------------------- connection ---------------------*/

