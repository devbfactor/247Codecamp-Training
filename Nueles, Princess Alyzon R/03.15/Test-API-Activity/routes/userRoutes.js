const express = require('express');
const userData = require('../model/userData');

const userRouter = express.Router();

// ---------- Create router ---------- //
userRouter.post('/addUser', (req, res) => {
    let body = req.body;
    userData.push(body);
    res.status(200).send(body);
})

// ---------- Read router ---------- //
userRouter.get('/getUsers', (req, res) => {
    res.status(200).send(userData);
    console.log(`User data is loaded successfully.`)
});

//get by user ID
userRouter.get('/getID/:id', (req, res) => {
    let getID = userData.find((user) => {
        return user.id === parseInt(req.params.id);
    });

    if (getID) {
        res.status(200).send(getID);
        console.log(`User ${req.params.id} successfully found.`)
    } else {
        res.status(404).send('User ID not found.')
    }
})

//get by username
userRouter.get('/getUser/:username', (req, res) => {

    let getUname = userData.find((user) => {
        return user.username === req.params.username;
    })

    if (getUname) {
        res.status(200).send(getUname);
        console.log(`Username successfully found.`)
    } else {
        res.status(404).send('Username not found.')
    }
})

// ---------- Update router ---------- //
userRouter.put('/upData/:id', (req, res) => {
    let userId = req.params.id;
    let body = req.body;

    let userIndex = userData.findIndex((user) => {
        return user.id === +userId;
    })

    //console.log(userIndex);

    if (userIndex >= 0) {
        let updateUser = { id: userId, ...body }
        userData[userIndex] = updateUser;
        res.json(updateUser);
        console.log(updateUser);
        console.log(`User data updated successfully.`)
    } else {
        res.status(404).send('User ID does not exist.')
    }
})

// ---------- Delete router ---------- //
userRouter.delete('/delData/:id', (req, res) => {
    let userId = req.params.id;

    let userIndex = userData.findIndex((user) => {
        return user.id === +userId;
    });

    if (userIndex >= 0) {
        var add_data = {
            "id": 11,
            "name": "Jon Snow",
            "username": "Johnny",
            "email": "lourd.johnny@biz.com",
            "address": "Kentucky USA",
            "phone": "10984732",
            "company": "Restau-run"
        };
        userData.splice(userIndex, 1, add_data);
        //console.log(userData.splice(userIndex, 1));
        res.status(200).send(`User with ID #${userId} is now deleted.`)
    } else {
        res.status(404).send('User ID does not exist.')
    }

    console.log(userData)
})

module.exports = userRouter;