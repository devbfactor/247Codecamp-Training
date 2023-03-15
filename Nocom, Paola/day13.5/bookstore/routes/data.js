const express = require('express');
const data = express.Router();

const bookData = [
    {
        id: 1,
        title: "Rebecca",
        author: "Daphne du Maurier"
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        id: 3,
        title: "Extremely Loud, Incredibly Close",
        author: "Jonathan Safran Foer"
    },
    {
        id: 4,
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro"
    },
    {
        id: 5,
        title: "Brida",
        author: "Paulo Coelho"
    }
]

data.get('/getBook', (req, res)=>{
    res.status(200).send(bookData);
});

data.get('/getBook/:title', (req, res)=>{
    let check = bookData.find(book => {
        return book.title === req.params.title;
    });

    if (check) {
        res.status(200).send(`${check.title}, by ${check.author}`);
    } else {
        res.status(404).send("Book not found");
    }
});

module.exports = data;