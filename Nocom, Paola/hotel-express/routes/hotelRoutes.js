// ---------- import ---------- //
const express = require('express');
const hotel = require('../model/hotel');

// ---------- initialize ---------- //
const router = express.Router();

// ********** MIDDLEWARE / CRUD ********** //
// ---------- Create router ---------- //
router.post('/postHotel', (req, res) => {
    let body = req.body;
    //console.log(req.body)
    hotel.push(body);
    res.status(200).send(body);
})

// ---------- Read router ---------- //
//.get Parameters - (path, function())
router.get('/getHotels', (req, res) => {
    res.status(200).send(hotel);
    console.log('Getting the data is successful.')
})

//get a specific hotel id
router.get('/getID/:id', (req, res) => {
    let check = hotel.find((item) => {
        return item.id === parseInt(req.params.id);
    });

    if (check) {
        res.status(200).send(check);
        console.log(`Getting the Hotel ID is successful.`)
    } else {
        res.status(404).send('Hotel ID not found.')
    }
})

//get specific hotel name
router.get('/getName/:namee', (req, res) => {
    let checkName = hotel.find((hname) => {
        return hname.namee === req.params.namee;
    });

    if (checkName) {
        res.status(200).send(checkName);
        console.log(`Getting the Hotel is successful.`)
    } else {
        res.status(404).send('Hotel not found.')
    }
})

// ---------- Update router ---------- //
router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    let index = hotel.findIndex((item) => {
        return item.id === +id
    })

    console.log(index);

    if (index >= 0) {
        let updateData = { id: id, ...body }
        //console.log(updateData);
        hotel[index] = updateData;
        //console.log(hotel[index]);
        res.json(updateData);
        // console.log(updateData);
    } else {
        res.status(404).send('ID does not exist.')
    }

})

// ---------- Delete router ---------- //
router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    //console.log(id);

    let index = hotel.findIndex((item) => {
        return item.id === parseInt(id);
    });

    // if (index >= 0) {
    //     hotel.pop(index);
    //     res.status(200).send(`Data at index: ${index} is deleted.`)
    // } else {
    //     res.status(404).send(`ID not found.`)
    // }

    if (index >= 0) {
        //splice has 3 parameters: (index of data to be removed,how many will be removed, items to be added)
        //example: var array = [apple, mango, banana, orange, kiwi];
        //array.splice(2, 1, "jackfruit")
        //apple mango jackfruit orange kiwi
        hotel.splice(index, 1);
        //console.log(hotel.splice(index, 1));
        res.status(200).send(`Hotel with ID #${id} is deleted.`)
    } else {
        res.status(404).send(`ID not found.`)
    }

    console.log(index);
});




module.exports = router;